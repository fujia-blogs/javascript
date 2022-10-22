import mitt from 'mitt';

const emitter = mitt();

// global unique, this is singleton
export default emitter;
