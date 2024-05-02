not_approved_students = []

with open("file.txt", "r") as grades_file:
    for line in grades_file:
        student, grade = line.split()

        # Lendo as informações de 'file.txt':
        print(f"Nome: {student} / Nota: {grade}")
        
        # Filtrando alunos reprovados (nota abaixo de 6) e adicionando-os à lista:
        if int(grade) < 6:
            not_approved_students.append(student)
    
with open("notApprovedStudentsFile.txt", "w") as not_approved_students_file:
    # Printando alunos reprovados:
    print(f"Alunos reprovados: {not_approved_students}")

    # Escrevendo novo arquivo apenas com estudantes reprovados:
    file_content = [student + "\n" for student in not_approved_students]
    not_approved_students_file.writelines(file_content)