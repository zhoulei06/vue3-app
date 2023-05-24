import style from "./test.module.scss";
export const textTsx2 = (props: AnyObject, context: AnyObject) => {
  console.log(props, context);
  const count = ref<number>(0);
  return (
    <>
      <div className={style.testA}>text tsx2</div>
      <div>{count.value}</div>
      <div>{props.str}</div>
    </>
  );
};

export const App = {
  render() {
    const count = ref(0);
    const timer = setTimeout(() => {
      count.value = 99090;
      console.log(count.value);
    }, 10000);
    return (
      <>
        <div>Vue 3.0</div>
        <div>{count.value}</div>
      </>
    );
  },
};
