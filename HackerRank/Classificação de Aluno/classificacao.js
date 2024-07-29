let notes = [4,73, 67, 100, 33]

function gradingStudents(grades) {
for(let i = 0; i < grades.length; i += 1) {
    let note = grades[i]
    if (note > 9) {
        if(note <= 33) {
            console.log(note)
             }
        if (note > 33 && note <= 38) {
            let note1 = note;
             console.log((40 - note1) + note);
            }
        if (note >= 67 && note <= 70) {
            let note1 = note;
            console.log(note1);

        }
      // ainda não resolvido
    }
}
}

gradingStudents(notes)

