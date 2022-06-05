import { createAsyncThunk, createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { Employee, fetchEmployees } from '../../../api/employee';

type EmployeeState ={
  // The unique IDs of each item. Must be strings or numbers
  ids: Array<number>
  // A lookup table mapping entity IDs to the corresponding entity objects
  entities: Object,
  loading: boolean,
  error: boolean,
}

// Initital State values
const initialState: EmployeeState = {
  ids: [],
  entities: {},
  loading: false,
  error: false
}

const employeeAdapter = createEntityAdapter<Employee>({
  selectId: ({ id }) => id, // Uniqueness is based on the id
})

// Thunk for fetching the interest boughts
export const getEmployeesList = createAsyncThunk('employee/list/fetch', async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await fetchEmployees();
  return response?.data || [];
});

// Slice creation
const employeeSlice = createSlice({
  name: 'employee/list',
  initialState: employeeAdapter.getInitialState({
    ...initialState
  }),
  reducers: {
    updateEmployee: employeeAdapter.updateOne,
    addEmployee: employeeAdapter.addOne
  },
  extraReducers(builder) {
    builder
      .addCase(getEmployeesList.fulfilled, (state, { payload }) => {
        state.loading = false;
        employeeAdapter.setAll(state, payload.list);
      })
      .addCase(getEmployeesList.pending, (state, { meta: { arg } }) => {
        state.loading = true;
      })
      .addCase(getEmployeesList.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
  }
});

export const {
  updateEmployee, addEmployee
} = employeeSlice.actions

export const { selectAll: selectEmployeeList,
  selectById: selectEmployeeById, selectEntities } =
// eslint-disable-next-line @typescript-eslint/no-explicit-any
employeeAdapter.getSelectors((state: any) => state?.employee?.list);

// Exporting the selectors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectEmployeeListState = (state: any) => state.employee?.list;

export const selectEmployeeListLoading = createSelector(
  selectEmployeeListState,
  (employeeState: EmployeeState) => employeeState.loading,
);

export default employeeSlice.reducer;
