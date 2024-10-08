-- ПРИНЦИП РАБОТЫ --
Я реализовал очередь на двух стеках -- входном и выходном.
Все добавляемые в очередь элементы добавляются во входной стек.
Все извлекаемые из очереди элементы извлекаются из выходного стека.

Если на момент извлечения из очереди выходной стек пуст,
то последовательно перекладываю все элементы из входного стека в выходной,
соответственно они перекладываются в обратном порядке.

Я вдохновился идеей решения из статьи https://habr.com/ru/post/483944/

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Из описания алгоритма следует, что чем раньше элемент добавился в очередь,
тем раньше он будет из неё извлечён.

Выходной стек хранит элементы в порядке, обратном тому,
в каком они пришли во входной.

Стек -- это порядок LIFO, а очередь -- это FIFO.
Стек инвертирует порядок элементов: первые становятся последними.
Так как у нас используются два стека, порядок меняется дважды,
в итоге мы возвращаем элементы в исходном порядке.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Добавление в очередь стоит O(1), потому что добавление во входной стек стоит O(1).

Извлечение из очереди стоит в лучшем случае O(1), когда выходной стек не пуст.

В худшем случае извлечение стоит O(n), когда выходной стек пуст,
и тогда требуется переложить все элементы из входного стека в выходной.

Оценим сложность извлечения из очереди в среднем:
Каждый элемент будет переложен из стека в стек ровно один раз.
Это значит, что добавление и извлечение n элементов в сумме будет стоить O(n).
В среднем получаем O(n) / n ~ O(1) -- амортизированная сложность.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Если очередь содержит n элементов, то входной стек содержит n1 элементов,
и выходной стек содержит n2 элементов, причём n1 + n2 = n

Стек, содержащий k элементов, занимает O(k) памяти.
Поэтому и моя очередь будет потреблять O(n1) + O(n2) = O(n) памяти.
