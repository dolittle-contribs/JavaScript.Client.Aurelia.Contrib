
export class FirstElementValueConverter {
  toView(value) {
    if (Array.isArray(value) && value.length) {
      return value[0];
    }
    return value;
  }
}


