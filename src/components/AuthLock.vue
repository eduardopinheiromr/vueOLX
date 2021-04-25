<script>
import { useRouter } from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  setup() {
    const router = useRouter();

    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        router.replace("/entrar");
      }
    });
  },
};
</script>
