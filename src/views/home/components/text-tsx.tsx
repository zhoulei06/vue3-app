import { defineComponent } from "vue";
import style from "./test.module.scss";
export default defineComponent({
  setup() {
    return () => (
      <div>
        <div class={style.text}>Child1</div>
        <div>Child2</div>
        <div>Child3</div>
      </div>
    );
  },
});
