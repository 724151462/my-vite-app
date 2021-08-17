import { defineComponent, getCurrentInstance } from "vue";
import store from "./store";

export default defineComponent({
  setup() {
    return () => {
      return <div>123</div>;
    };
  },
  methods: {
    getData() {
      console.log(store.state["user"].userName);
      (this as any).$post("/linewell/cloud/search/v1-1/ren/renBaseInfo", {
        keyWord: "string",
      });
      // console.log(proxy.$post);
    },
  },
  mounted() {
    this.getData();
  },
});
