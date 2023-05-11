<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        msg: String,
    },
})
export default class Player extends Vue {
    msg!: string;
}
</script>
