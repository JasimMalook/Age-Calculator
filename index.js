function calculateAge() {
    const name = document.getElementById("name").value;
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();

    const ageInMilliseconds = today - dob;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Taking leap years into account

    const years = Math.floor(ageInYears);
    const months = Math.floor((ageInYears - years) * 12);
    const days = Math.floor((ageInYears - years - months / 12) * 365.25);

    const result = `Hi ${name}, you are ${years} years old, ${months} months, and ${days} days old.`;
    document.getElementById("result").textContent = result;
    document.getElementById("result").style.display="block";
}