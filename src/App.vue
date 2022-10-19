<template>
	<div id="app">
		<div class="gray-wrapper wrapper">
			<HeadNav class="HeadNav" id="head_nav"/>
		</div>
		<div class="gray-wrapper wrapper">
			<Intro class="Intro" id="intro"/>
		</div>
		<div class="wrapper">
			<AboutProject class="AboutProject" id="about_project"/>
		</div>
		<div class="wrapper">
			<Cards class="Cards" id="cards"/>
		</div>
		<div class="wrapper">
			<List class="List" id="list"/>
		</div>
		<div class="wrapper">
			<Mission class="Mission" id="mission"/>
		</div>
    </div>
  </template>
  
<script>
    import HeadNav from "./components/HeadNav.vue";
    import Intro from "./components/Intro.vue";
    import AboutProject from "./components/AboutProject.vue";
    import Cards from "./components/Cards.vue";
    import List from "./components/List.vue";
    import Mission from "./components/Mission.vue";
  
    export default {
    components: { HeadNav, Intro, AboutProject, Cards, List, Mission },
  };
</script>