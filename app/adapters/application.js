import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'api'
  // would optimize querries if supported by backend
  // ,
  // coalesceFindRequests: true
});

