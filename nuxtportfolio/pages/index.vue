<template>
  <div class="home">
    <div class="info">
      <header>
        <h1>My Portfolio</h1>
        <p>Johara B. Pontino</p>
        <p>3rd Year BS- Computer Science</p>
      </header>
    </div>
    <div class="image">
      <img src="/profile.jpg" alt="Profile Picture" />
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 80vh;
}

.info {
  width: 50%;
}

.image {
  width: 60%;
  display: flex;
  justify-content: center;
}

img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
