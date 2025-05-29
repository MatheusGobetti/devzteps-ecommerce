<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
</script>

<section class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-blue-50">
  <div class="text-center max-w-xl">
    <h1 class="text-5xl font-extrabold mb-4 text-gray-900">
      DevZteps Ecommerce
    </h1>
    <p class="text-lg mb-8 text-gray-600">
      A plataforma perfeita para criar sua loja, vender e crescer.
    </p>
    <div class="flex gap-4 justify-center">
      <Button label="Ver Produtos" href="/products" />
      <Button label="Começar Agora" href="/signup" variant="secondary" />
      <Button label="Log-In" href="/signup" variant="primary" />
    </div>
  </div>
</section>
