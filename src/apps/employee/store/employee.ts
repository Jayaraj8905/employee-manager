import { createAsyncThunk, createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { deleteEmployeeById, Employee, EmployeeForm, fetchEmployees, saveEmployee, saveEmployeeById } from '../../../api/employee';

type EmployeeState ={
  // The unique IDs of each item. Must be strings or numbers
  ids: Array<number>
  // A lookup table mapping entity IDs to the corresponding entity objects
  entities: Object,
  loading: boolean,
  error: boolean,
  submitting: boolean,
  submittingError: boolean
}

// Initital State values
const initialState: EmployeeState = {
  ids: [],
  entities: {},
  loading: false,
  error: false,
  submitting: false,
  submittingError: false
}

const employeeAdapter = createEntityAdapter<Employee>({
  selectId: ({ id }) => id, // Uniqueness is based on the id
})

// Thunk for fetching the employees
export const getEmployeesList = createAsyncThunk('employee/list/fetch', async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await fetchEmployees();
  return response?.data || [];
});

// Thunk to create the employee
export const createEmployee = createAsyncThunk('employee/list/create', async (employeeForm: EmployeeForm) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await saveEmployee(employeeForm);
  return response?.data || {};
});

// Thunk to update the employee
export const updateEmployee = createAsyncThunk('employee/list/update', async ({id, employee}: {id: string, employee: EmployeeForm}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await saveEmployeeById(id, employee);
  return response?.data || {};
});

// Thunk to delete the employee
export const deleteEmployee = createAsyncThunk('employee/list/delete', async ({id}: {id: string}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await deleteEmployeeById(id);
  return response?.data || {};
});

// Slice creation
const employeeSlice = createSlice({
  name: 'employee/list',
  initialState: employeeAdapter.getInitialState({
    ...initialState
  }),
  reducers: {
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
      .addCase(createEmployee.pending, (state) => {
        state.submitting = true;
      })
      .addCase(createEmployee.fulfilled, (state, { payload }) => {
        state.submitting = false;
        employeeAdapter.addOne(state, payload)
      })
      .addCase(createEmployee.rejected, (state) => {
        state.submittingError = true;
        state.submitting = false;
      })
      .addCase(updateEmployee.pending, (state) => {
        state.submitting = true;
      })
      .addCase(updateEmployee.fulfilled, (state, { payload }) => {
        state.submitting = false;
        employeeAdapter.updateOne(state, {
          id: payload.id,
          changes: {
            ...payload,
          }
        });
      })
      .addCase(updateEmployee.rejected, (state) => {
        state.submittingError = true;
        state.submitting = false;
      })
      .addCase(deleteEmployee.fulfilled, (state, { meta: { arg: { id }} }) => {
        employeeAdapter.removeOne(state, id);
      })
  }
});

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

export const selectEmployeeSubmitting = createSelector(
  selectEmployeeListState,
  (employeeState: EmployeeState) => employeeState.submitting,
);

export default employeeSlice.reducer;
