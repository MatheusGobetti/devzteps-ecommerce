<script lang="ts">
  import { base, styles } from './Button.styles.js';

  export let label: string;
  export let href: string = '#';
  export let variant: 'primary' | 'secondary' = 'primary';

  const style = `${base} ${styles[variant]}`;
</script>

<a href={href} class={style}>
  {label}
</a>
