# Aplikasi Topsis

## Dibuat Oleh
1. Alfian (UI/UX)
2. Benaya (Backend)
3. Fauzan (Frontend)
4. Rafi Fajar (Frontend/Backend)

## Spesifikasi (v:1.0)
### Database :
- Table :
1. employees
    - uid
    - first_name
    - last_name
    - date_of_birth
    - division_id
2. matrix_scores
    - uid
    - year
    - score
    - criteria_id
3. criterias
    - uid
    - name
    - criteria_type_id
4. criteria_types
    - uid
    - type
5. supervisors
    - uid
    - username
    - password
    - first_name
    - last_name
    - division_id
6. divisions
    - uid
    - name

- Create :
1. employees
2. matrix_scores

- Read :
1. employees
2. matrix_scores
3. criterias
4. supervisors

- Update :
1. employees

- Delete :
1. alternatives

### Algorithm :
1. Perhitungan topsis dari suatu alternatif dengan nilai matriksnya

### Frontend :
1. Halaman input employee
2. Halaman input matriks
3. Halaman baca hasil perhitungan
4. Halaman baca criteria
5. Halaman login
6. Halaman baca employee

#### Form Fields :
1. employee/create
    - input employees.first_name
    - input employees.last_name
    - input employees.date_of_birth
    - input submit button
2. matrix/create
    - label divisions.name
    - input employees.first_name
    - table matrix
    - header number (0)
    - header criteria.name (1)
    - header criteria.name (2)
    - header criteria.name (3)
    - header criteria.name (4)
    - header criteria.name (5)
    - row number (1)
    - row matrix_scores.score (1)
    - row matrix_scores.score (2)
    - row matrix_scores.score (3)
    - row matrix_scores.score (4)
    - row matrix_scores.score (5)
    - input submit button
3. topsis/read
    - input employees.name
    - input matrix_scores.year
    - table output
    - input submit button
4. criteria/read
    - table criteria
    - header number (0)
    - header id (1)
    - header name (2)
    - row number (0)
    - row criterias.id (1)
    - row criterias.name (2)
5. auth/index.js (landing page)
    - input username
    - input password
    - input submit button
6. employee/read
    - table employee (dengan pagination)
    - header number (0)
    - header first_name (1)
    - header last_name (2)
    - header date_of_birth (3)
    - header division_name (4)