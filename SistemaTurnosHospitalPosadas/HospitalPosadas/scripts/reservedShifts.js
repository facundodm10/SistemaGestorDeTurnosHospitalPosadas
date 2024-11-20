    function toggleFields() {
    const turnFor = document.getElementById("turnFor").value;
    const myInfo = document.getElementById("myInfo");
    const otherInfo = document.getElementById("otherInfo");

    if (turnFor === "myself") {
    myInfo.style.display = "block";
    otherInfo.style.display = "none";
} else if (turnFor === "other") {
    myInfo.style.display = "none";
    otherInfo.style.display = "block";
}
}