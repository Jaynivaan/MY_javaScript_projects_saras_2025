function showPractice(element) {
    //read alyour  custom attributes via dataset
    const phase     = element.dataset.phase;
    const shadow    = element.dataset.shadow;
    const god       = element.dataset.god;
    const ritual    = element.dataset.ritual;
    const intensity = element.dataset.intensity;
    const duration  = element.dataset.duration;
    const boon      = element.dataset.boon;

    //make a simple , powerrful message

    const message = 
        "Phase: " + phase.toUpperCase() + "\n" + 
        "Shadow targeted: " + shadow + "\n" +
        "Deity energy : " + god + "\n" +
        "Ritual type: " + ritual + "\n" +
        "Duration: " + duration + "\n" +
        "Intensity: " + intensity + "\n" +
        "Boon: " + boon + "\n\n" +
        "Task: \n" + element.innerHTML;

    //show in alert message
    alert(message);

    //.. and also on hte page 
    document.getElementById("output").innerText= message;
}