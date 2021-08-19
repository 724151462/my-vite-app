import { defineComponent, getCurrentInstance, ref } from "vue";
import store from "./store";
import { testWrapper, useStyles } from "./styles";

export default defineComponent({
  setup() {
    const active = ref(2);
    console.log(useStyles);
    const classesRef = useStyles();
    const classes = classesRef.value;
    return () => {
      return (
        <div class={classes.container}>
          <van-tabs v-model={[active.value, "active"]}>
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
          </van-tabs>
        </div>
      );
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
