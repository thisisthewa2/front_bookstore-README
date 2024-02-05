function cls<T>(...classes: Array<T>) {
  return classes.filter(Boolean).join(' ');
}

export default cls;
