<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import './home.css';
</script>

<section class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">
      DevZteps Ecommerce
    </h1>
    <p class="hero-subtitle">
      A plataforma perfeita para criar sua loja, vender e crescer.
    </p>
    <div class="hero-buttons">
      <Button label="Ver Produtos" href="/products" />
      <Button label="Começar Agora" href="/signup" variant="secondary" />
      <Button label="Voltar para o início" href="/" variant="secondary" />
    </div>
  </div>
</section>
