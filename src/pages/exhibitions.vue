<template>
    <div class="box">
      <exhibitions-header></exhibitions-header>
      <exhibitions-center></exhibitions-center>
      <exhibitions-footer></exhibitions-footer>
    </div>
</template>

<script>
    import exhibitions from "../assets/css/exhibitions.css";
    import ExhibitionsHeader from "../components/exhibitions/ExhibitionsHeader";
    import ExhibitionsCenter from "../components/exhibitions/ExhibitionsCenter";
    import ExhibitionsFooter from "../components/exhibitions/ExhibitionsFooter";
    export default {
        name: "exhibition",
      components: {ExhibitionsFooter, ExhibitionsCenter, ExhibitionsHeader,exhibitions}
    }
</script>

<style scoped>

</style>
