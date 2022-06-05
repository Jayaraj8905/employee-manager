import mock from './mock';
require('./db/employee');

mock.onAny().passThrough();
