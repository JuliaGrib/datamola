const tasks = [
    {
        id: '1',
        name: 'Сделать ветку Task_4',
        description: 'Сделать ветку для следующего таска',
        createdAt: new Date('2023-03-02T15:00:00'),
        assignee: 'Julia Grib',
        status: 'Complete',
        priority: 'Hight',
        isPrivate: false,
        comments: [],
    },
    {
        id: '2',
        name: 'Сделать ветку для создания модуля',
        description: 'Сделать ветку, в которой буду создавать модуль',
        createdAt: new Date('2023-03-02T15:00:00'),
        assignee: 'Julia Grib',
        status: 'Complete',
        priority: 'Hight',
        isPrivate: false,
        comments: [],
    },
    {
        id: '3',
        name: 'Cходить с Сашей на каток',
        description: 'Саша заболела, так что походу не пойдем',
        createdAt: new Date('2023-03-02T17:00:00'),
        assignee: 'Julia Grib',
        status: 'To Do',
        priority: 'Low',
        isPrivate: false,
        comments: [],
    },
    {
        id: '4',
        name: 'Купить семечки для синичек',
        description: 'Синички обнаглели и съели все семочки в кормушке',
        createdAt: new Date('2023-03-10T11:00:00'),
        assignee: 'Julia Grib',
        status: 'To Do',
        priority: 'Low',
        isPrivate: false,
        comments: [],
    },
    {
        id: '5',
        name: 'Помочь папе разобраться с айфоном',
        description: 'Друг папы походу купил паленый айфон, просили проверить емей',
        createdAt: new Date('2023-03-01T23:59:00'),
        assignee: 'Julia Grib',
        status: 'Complete',
        priority: 'Low',
        isPrivate: false,
        comments: [],
    },
    {
        id: '6',
        name: 'Подготовиться к преподаванию в пятницу',
        description: 'Подготовить лекцию и практику про bootstrap',
        createdAt: new Date('2023-03-03T12:00:00'),
        assignee: 'Julia Grib',
        status: 'To Do',
        priority: 'Hight',
        isPrivate: false,
        comments: [],
    },
    {
        id: '7',
        name: 'Сходить за бисером для браслета',
        description: 'Подруга попросила браслет, нужно забрать бисер и сделать браслет',
        createdAt: new Date('2023-03-03T10:30:00'),
        assignee: 'Julia Grib',
        status: 'To Do',
        priority: 'Medium',
        isPrivate: false,
        comments: [],
    },
    {
        id: '8',
        name: 'Сделать домашку по англ',
        description: 'Срочно сделать домашку по англу, а то малая разозлится',
        createdAt: new Date('2023-03-02T22:00:00'),
        assignee: 'Julia Grib',
        status: 'In progress',
        priority: 'Hight',
        isPrivate: false,
        comments: [],
    },
    {
        id: '9',
        name: 'Забрать посылку из Риги',
        description: 'Подруга из Риги передала отцу спининг, попросила передать в Рогачев',
        createdAt: new Date('2023-03-04T08:00:00'),
        assignee: 'Julia Grib',
        status: 'To Do',
        priority: 'Medium',
        isPrivate: false,
        comments: [],
    },
    {
        id: '10',
        name: 'Сделать правки от ментора',
        description: 'Ментор прислал 53 коммента, срочная срочность',
        createdAt: new Date('2023-03-04T10:00:00'),
        assignee: 'Julia Grib',
        status: 'To Do',
        priority: 'Hight',
        isPrivate: false,
        comments: [],
    },
    {
        id: '11',
        name: 'Сделать Extra Tasks',
        description: 'Нужно решить две задачи из Extra Tasks',
        createdAt: new Date('2023-03-06T18:00:00'),
        assignee: 'Julia Grib',
        status: 'To Do',
        priority: 'Hight',
        isPrivate: false,
        comments: [],
    },
    {
        id: '12',
        name: 'Сделать Task_3',
        description: 'Нужно сверстать макет до 26.02',
        createdAt: new Date('2023-02-20T12:10:00'),
        assignee: 'Julia Grib',
        status: 'Complete',
        priority: 'Hight',
        isPrivate: false,
        comments: [],
    },
    {
        id: '13',
        name: 'Сделать Extra_Task_3',
        description: 'Нужно сделать два дополнительных задания до 26.02',
        createdAt: new Date('2023-02-20T12:00:00'),
        assignee: 'Julia Grib',
        status: 'Complete',
        priority: 'Hight',
        isPrivate: false,
        comments: [],
    },
    {
        id: '14',
        name: 'Разложить носки по приоритету',
        description: 'Приоритеты: низкие, высокие, для особого случая',
        createdAt: new Date('2023-03-01T09:00:00'),
        assignee: 'Julia Grib',
        status: 'Complete',
        priority: 'Low',
        isPrivate: false,
        comments: [],
    },
    {
        id: '15',
        name: 'Найти карточку МТБанка',
        description: 'Потеряла карточку через неделю после выдачи. Это 7я за 2 года',
        createdAt: new Date('2023-03-09T15:00:00'),
        assignee: 'Julia Grib',
        status: 'To Do',
        priority: 'Low',
        isPrivate: false,
        comments: [],
    },
    {
        id: '16',
        name: 'Выбрать платье на свадьбу подруги',
        description: 'Надо найти самое красивое платье для свадьбы подруги',
        createdAt: new Date('2023-02-25T19:00:00'),
        assignee: 'Julia Grib',
        status: 'In progress',
        priority: 'Low',
        isPrivate: false,
        comments: [],
    },
    {
        id: '17',
        name: 'Съездить в Рогачев на разлив Днепра',
        description: 'Срочно надо увидеть как разливается Днепр',
        createdAt: new Date('2023-03-15T10:00:00'),
        assignee: 'Julia Grib',
        status: 'To Do',
        priority: 'Low',
        isPrivate: false,
        comments: [],
    },
    {
        id: '18',
        name: 'Похудение Кота',
        description: 'Кот должен похудеть на килограмм',
        createdAt: new Date('2023-03-02T12:00:00'),
        assignee: 'Julia Grib',
        status: 'Complete',
        priority: 'Hight',
        isPrivate: false,
        comments: [],
    },
    {
        id: '19',
        name: 'Начать пересматривать Наруто',
        description: '10-раз уже, но все равно тянет и мотивирует',
        createdAt: new Date('2023-02-16T21:00:00'),
        assignee: 'Julia Grib',
        status: 'In progress',
        priority: 'Low',
        isPrivate: false,
        comments: [],
    },
    {
        id: '20',
        name: 'Покормить Кота на улице',
        description: 'Ежедневно кормить хромого Кота на улице',
        createdAt: new Date('2023-02-01T09:10:00'),
        assignee: 'Julia Grib',
        status: 'In progress',
        priority: 'Low',
        isPrivate: false,
        comments: [],
    },
];
