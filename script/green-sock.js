function modalAnimation(classItem) {
  gsap.fromTo(`${classItem}`, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 1});
}

function removeModalAnimation(classItem) {
  gsap.fromTo(`${classItem}`, {scale: 1, opacity: 1}, { opacity: 0, scale: 0, duration: .7 });
}

export { modalAnimation, removeModalAnimation };