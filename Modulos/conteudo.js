class Cursos{
  static cursos = ["Java", "JavaScript", "Python", "C", "C#", "C++"];
  constructor() {}

  static getTodosCursos = () => {
    return this.cursos
  }

  static getCurso = (i_curso) => {
    return this.cursos[i_curso]
  }

  static addCurso = (todosCurso) => {
    this.cursos.push(todosCurso)
  }

  static apagaCurso = () => {
    this.cursos=[]
  }
}


export default Cursos;

