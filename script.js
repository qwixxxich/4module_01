document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();

  // с этим обьектом вы будете работать
  const groupsData = {
    curator: "Глазунова",
    groups: [
      {
        id: "britsp251",
        title: "БРИЦП251",
        students: [
          { name: "Абеленцев Марк" },
          { name: "Бородин Александр" },
          { name: "Казазян Арина" },
          { name: "Карпив Полина" },
          { name: "Куренков Всеволод" },
          { name: "Ли Вадим" },
          { name: "Морунов Пётр" },
          { name: "Мосоровчук Анна" },
          { name: "Нечаев Валерий" },
          { name: "Николенко Софья" },
          { name: "Новикова Полина" },
          { name: "Олейник София" },
          { name: "Саблина Мария" },
          { name: "Смирнов Илья" },
          { name: "Смирнов Макар" },
          { name: "Тищенко Глафира" },
          { name: "Эверглен Мелани" },
        ],
      },
      {
        id: "britsp252",
        title: "БРИЦП252",
        students: [
          { name: "Белов Александр" },
          { name: "Борисова Виктория" },
          { name: "Бухарина Василиса" },
          { name: "Дегай Всеволод" },
          { name: "Исаев Артём" },
          { name: "Камнев Иван" },
          { name: "Колодяжный Степан" },
          { name: "Курпаяниди Эллина" },
          { name: "Куфаев Владислав" },
          { name: "Ломсадзе Олег" },
          { name: "Никифорова Елизавета" },
          { name: "Носкова Анастасия" },
          { name: "Пилипенко Дмитрий" },
          { name: "Салмин Пётр" },
          { name: "Степанова Софья" },
          { name: "Сукоркин Мирон" },
          { name: "Шамров Данил" },
          { name: "Этука Александр" },
        ],
      },
    ],
  };

  // задача 35
  const t35Button = document.querySelector("[data-js='t35-show']");
  const t35List = document.querySelector("[data-js='t35-list']");

  t35Button.addEventListener("click", () => {
    t35List.innerHTML = "";

    groupsData.groups.forEach((group) => {
      const item = document.createElement("li");
      item.textContent = group.title;
      t35List.append(item);
    });
  });

  // задача 36
  const t36Buttons = document.querySelectorAll("[data-js='t36-buttons'] .btn");
  const t36List = document.querySelector("[data-js='t36-list']");

  t36Buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const groupId = button.dataset.groupId;
      const group = groupsData.groups.find((item) => item.id === groupId);

      t36List.innerHTML = "";

      group.students.forEach((student) => {
        const item = document.createElement("li");
        item.textContent = student.name;
        t36List.append(item);
      });
    });
  });

  // задача 37
  const t37Buttons = document.querySelectorAll("[data-js='t37-buttons'] .btn");
  const t37Out = document.querySelector("[data-js='t37-out']");

  t37Buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const groupId = button.dataset.groupId;
      const group = groupsData.groups.find((item) => item.id === groupId);

      t37Out.textContent = "Студентов: " + group.students.length;
    });
  });

  // задача 38
  const t38Buttons = document.querySelectorAll("[data-js='t38-buttons'] [data-group-id]");
  const t38Pick = document.querySelector("[data-js='t38-pick']");
  const t38Current = document.querySelector("[data-js='t38-current']");
  const t38Out = document.querySelector("[data-js='t38-out']");
  let t38GroupId = "britsp251";

  t38Buttons.forEach((button) => {
    button.addEventListener("click", () => {
      t38GroupId = button.dataset.groupId;

      const group = groupsData.groups.find((item) => item.id === t38GroupId);
      t38Current.textContent = "Текущая группа: " + group.title;
    });
  });

  t38Pick.addEventListener("click", () => {
    const group = groupsData.groups.find((item) => item.id === t38GroupId);
    const randomIndex = Math.floor(Math.random() * group.students.length);
    const student = group.students[randomIndex];

    t38Out.textContent = "Студент: " + student.name;
  });

  // задача 39
  const t39Buttons = document.querySelectorAll("[data-js='t39-buttons'] .btn");
  const t39Title = document.querySelector("[data-js='t39-title']");
  const t39Curator = document.querySelector("[data-js='t39-curator']");
  const t39List = document.querySelector("[data-js='t39-list']");

  t39Buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const groupId = button.dataset.groupId;
      const group = groupsData.groups.find((item) => item.id === groupId);

      t39Title.textContent = group.title;
      t39Curator.textContent = "Куратор: " + groupsData.curator;
      t39List.innerHTML = "";

      group.students.forEach((student) => {
        const item = document.createElement("li");
        item.textContent = student.name;
        t39List.append(item);
      });
    });
  });

  // задача 40
  const t40Buttons = document.querySelectorAll("[data-js='t40-buttons'] .btn");
  const t40Count = document.querySelector("[data-js='t40-count']");
  const t40List = document.querySelector("[data-js='t40-list']");

  function renderTask40(groupId) {
    const group = groupsData.groups.find((item) => item.id === groupId);

    t40Count.textContent = "Студентов: " + group.students.length;
    t40List.innerHTML = "";

    group.students.forEach((student) => {
      const item = document.createElement("li");
      item.textContent = student.name;
      t40List.append(item);
    });

    t40Buttons.forEach((button) => {
      if (button.dataset.groupId === groupId) {
        button.classList.add("is-active");
      } else {
        button.classList.remove("is-active");
      }
    });
  }

  t40Buttons.forEach((button) => {
    button.addEventListener("click", () => {
      renderTask40(button.dataset.groupId);
    });
  });

  renderTask40("britsp251");

  // задача 41
  const t41Buttons = document.querySelectorAll("[data-js='t41-buttons'] [data-group-id]");
  const t41Random = document.querySelector("[data-js='t41-random']");
  const t41Count = document.querySelector("[data-js='t41-count']");
  const t41RandomOut = document.querySelector("[data-js='t41-random-out']");
  const t41Title = document.querySelector("[data-js='t41-title']");
  const t41Curator = document.querySelector("[data-js='t41-curator']");
  const t41List = document.querySelector("[data-js='t41-list']");
  let t41GroupId = "britsp251";

  function getGroup(id) {
    return groupsData.groups.find((item) => item.id === id);
  }

  function renderList(list, students) {
    list.innerHTML = "";

    students.forEach((student) => {
      const item = document.createElement("li");
      item.textContent = student.name;
      list.append(item);
    });
  }

  function renderCard(group) {
    t41Title.textContent = group.title;
    t41Curator.textContent = "Куратор: " + groupsData.curator;
    renderList(t41List, group.students);
  }

  function renderTask41(groupId) {
    const group = getGroup(groupId);

    t41Count.textContent = "Студентов: " + group.students.length;
    renderCard(group);

    t41Buttons.forEach((button) => {
      if (button.dataset.groupId === groupId) {
        button.classList.add("is-active");
      } else {
        button.classList.remove("is-active");
      }
    });
  }

  t41Buttons.forEach((button) => {
    button.addEventListener("click", () => {
      t41GroupId = button.dataset.groupId;
      renderTask41(t41GroupId);
    });
  });

  t41Random.addEventListener("click", () => {
    const group = getGroup(t41GroupId);
    const randomIndex = Math.floor(Math.random() * group.students.length);
    const student = group.students[randomIndex];

    t41RandomOut.textContent = "Студент: " + student.name;
  });

  renderTask41(t41GroupId);
});
