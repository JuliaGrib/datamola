class Task {
  _id;
  _createdAt;

  constructor(
    id,
    name,
    description,
    createdAt,
    assignee,
    status,
    priority,
    isPrivate,
    comments
  ) {
    this._id = id;
    this.name = name;
    this.description = description;
    this.assignee = assignee;
    this.status = status;
    this.priority = priority;
    this.isPrivate = isPrivate;
    this._createdAt = createdAt;
    this.comments = this._generateCom(comments);
  }

  _generateCom(comments) {
    if (Array.isArray(comments) && comments.length === 0) {
      return comments;
    }
    if (Array.isArray(comments) && comments.length > 0) {
      return comments.map(
        ({ id, text, createdAt, author }) =>
          new Comment(id, text, createdAt, author)
      );
    }
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    this._createdAt = value;
  }

  static validateTask(task) {
    try {
      if (Helper.checkerArray(task)) {
        throw new Error(ERRORS.taskNotObject);
      }

      const validateObjKeys = Object.keys(validateObj).sort();
      const taskKeys = Object.keys(task).sort();

      if (!taskKeys.length) {
        throw new Error(ERRORS.emptyObject);
      }

      if (validateObjKeys.length !== taskKeys.length) {
        throw new Error(ERRORS.lengthNotValidate);
      }

      for (let i = 0; i < validateObjKeys.length; i++) {
        if (validateObjKeys[i] !== taskKeys[i]) {
          throw new Error(ERRORS.keysNotValidate);
        }
      }

      for (const key in task) {
        if (!validateObj[key](task[key])) {
          return false;
          // throw new Error(ERRORS.valuesNotValidate);
        }
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
