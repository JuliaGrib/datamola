class RegistrationView extends View {
  constructor(id) {
    super(id);
  }

  display() {
    this.nodeElem.className = 'main';
    this.nodeElem.innerHTML = `
      <div class="container">
        <div class="main_autorization">
          <div class="main__descr">
            <h1 class="title title_autorization">Kanban</h1>
            <p class="title subtitle_autorization">for task be done</p>
          </div>
          <div class="enter">
            <div class="enter__header">
              <h2 class="title title_enter">Sign up</h2>
              <p class="enter__text">
                Have account?
                <a class="link link_enter link_enter_login" href="#">Log in</a> or
                continue
                <a class="link link_enter link_enter_continue" href="#"
                  >without authorization</a
                >
              </p>
            </div>
            <form>
              <div class="container__form-four">
                <div class="form-elem form-elem_user form-elem_icon">
                  <label class="label label_login" for="login">Login*</label>
                  <input
                    class="input input_default"
                    type="text"
                    id="login"
                    placeholder="Enter your login"
                    required
                  />
                  <span class="input_icon-svg">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 0C12.0196 0 14.4359 1.00089 16.2175 2.78249C17.9991 4.56408 19 6.98044 19 9.5C19 12.0196 17.9991 14.4359 16.2175 16.2175C14.4359 17.9991 12.0196 19 9.5 19C6.98044 19 4.56408 17.9991 2.78249 16.2175C1.00089 14.4359 0 12.0196 0 9.5C0 6.98044 1.00089 4.56408 2.78249 2.78249C4.56408 1.00089 6.98044 0 9.5 0ZM9.5 1C7.24566 1 5.08365 1.89553 3.48959 3.48959C1.89553 5.08365 1 7.24566 1 9.5C1 11.7543 1.89553 13.9163 3.48959 15.5104C5.08365 17.1045 7.24566 18 9.5 18C10.6162 18 11.7215 17.7801 12.7528 17.353C13.7841 16.9258 14.7211 16.2997 15.5104 15.5104C16.2997 14.7211 16.9258 13.7841 17.353 12.7528C17.7801 11.7215 18 10.6162 18 9.5C18 7.24566 17.1045 5.08365 15.5104 3.48959C13.9163 1.89553 11.7543 1 9.5 1ZM9 5V7H10V5H9ZM9 9V14H10V9H9Z"
                        fill="#808080"
                      />
                    </svg>
                  </span>
                  <div class="input__message input__message-login"></div>
                </div>
                <div class="form-elem form-elem_user form-elem_icon">
                  <label class="label label_name" for="name">Name*</label>
                  <input
                    class="input input_name input_default"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                  <span class="input_icon-svg">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 0C12.0196 0 14.4359 1.00089 16.2175 2.78249C17.9991 4.56408 19 6.98044 19 9.5C19 12.0196 17.9991 14.4359 16.2175 16.2175C14.4359 17.9991 12.0196 19 9.5 19C6.98044 19 4.56408 17.9991 2.78249 16.2175C1.00089 14.4359 0 12.0196 0 9.5C0 6.98044 1.00089 4.56408 2.78249 2.78249C4.56408 1.00089 6.98044 0 9.5 0ZM9.5 1C7.24566 1 5.08365 1.89553 3.48959 3.48959C1.89553 5.08365 1 7.24566 1 9.5C1 11.7543 1.89553 13.9163 3.48959 15.5104C5.08365 17.1045 7.24566 18 9.5 18C10.6162 18 11.7215 17.7801 12.7528 17.353C13.7841 16.9258 14.7211 16.2997 15.5104 15.5104C16.2997 14.7211 16.9258 13.7841 17.353 12.7528C17.7801 11.7215 18 10.6162 18 9.5C18 7.24566 17.1045 5.08365 15.5104 3.48959C13.9163 1.89553 11.7543 1 9.5 1ZM9 5V7H10V5H9ZM9 9V14H10V9H9Z"
                        fill="#808080"
                      />
                    </svg>
                  </span>
                  <div class="input__message input__message-name"></div>
                </div>
                <div class="form-elem form-elem_user form-elem_icon">
                  <label class="label label_password" for="password">Password*</label>
                  <input
                    class="input input_default "
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                  <span class="input_icon-svg">
                    <svg
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.54014 0.71L2.25014 0L19.0001 16.75L18.2901 17.46L14.9501 14.11C13.5801 14.68 12.0801 15 10.5001 15C5.94014 15 2.00014 12.35 0.140137 8.5C1.11014 6.5 2.63014 4.83 4.50014 3.68L1.54014 0.71ZM10.5001 14C11.7901 14 13.0301 13.77 14.1701 13.34L13.0501 12.21C12.3201 12.71 11.4501 13 10.5001 13C8.00014 13 6.00014 11 6.00014 8.5C6.00014 7.55 6.29014 6.68 6.79014 5.95L5.24014 4.41C3.56578 5.38547 2.18961 6.79968 1.26014 8.5C3.04014 11.78 6.50014 14 10.5001 14ZM19.7401 8.5C17.9601 5.22 14.5001 3 10.5001 3C9.35014 3 8.23014 3.19 7.19014 3.53L6.41014 2.75C7.68014 2.26 9.06014 2 10.5001 2C15.0601 2 19.0001 4.65 20.8601 8.5C19.9514 10.3858 18.5439 11.987 16.7901 13.13L16.0701 12.4C17.6001 11.44 18.8701 10.1 19.7401 8.5ZM10.5001 4C13.0001 4 15.0001 6 15.0001 8.5C15.0001 9.32 14.7801 10.08 14.4001 10.74L13.6601 10C13.8801 9.54 14.0001 9.04 14.0001 8.5C14.0001 7.57174 13.6314 6.6815 12.975 6.02513C12.3186 5.36875 11.4284 5 10.5001 5C9.96014 5 9.46014 5.12 9.00014 5.34L8.26014 4.6C8.92014 4.22 9.68014 4 10.5001 4ZM7.00014 8.5C7.00014 9.42826 7.36889 10.3185 8.02526 10.9749C8.68164 11.6313 9.57188 12 10.5001 12C11.1701 12 11.7901 11.81 12.3201 11.5L7.50014 6.68C7.19014 7.21 7.00014 7.83 7.00014 8.5Z"
                        fill="#808080"
                      />
                    </svg>
                  </span>
                  <div class="input__message input__message-password"></div>
                </div>
                <div class="form-elem form-elem_user form-elem_icon">
                  <label class="label label_repeat-password" for="repeat_password"
                    >Repeat password*</label
                  >
                  <input
                    class="input input_default"
                    type="password"
                    id="repeat_password"
                    placeholder="Repeat your password"
                    required
                  />
                  <span class="input_icon-svg">
                    <svg
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.54014 0.71L2.25014 0L19.0001 16.75L18.2901 17.46L14.9501 14.11C13.5801 14.68 12.0801 15 10.5001 15C5.94014 15 2.00014 12.35 0.140137 8.5C1.11014 6.5 2.63014 4.83 4.50014 3.68L1.54014 0.71ZM10.5001 14C11.7901 14 13.0301 13.77 14.1701 13.34L13.0501 12.21C12.3201 12.71 11.4501 13 10.5001 13C8.00014 13 6.00014 11 6.00014 8.5C6.00014 7.55 6.29014 6.68 6.79014 5.95L5.24014 4.41C3.56578 5.38547 2.18961 6.79968 1.26014 8.5C3.04014 11.78 6.50014 14 10.5001 14ZM19.7401 8.5C17.9601 5.22 14.5001 3 10.5001 3C9.35014 3 8.23014 3.19 7.19014 3.53L6.41014 2.75C7.68014 2.26 9.06014 2 10.5001 2C15.0601 2 19.0001 4.65 20.8601 8.5C19.9514 10.3858 18.5439 11.987 16.7901 13.13L16.0701 12.4C17.6001 11.44 18.8701 10.1 19.7401 8.5ZM10.5001 4C13.0001 4 15.0001 6 15.0001 8.5C15.0001 9.32 14.7801 10.08 14.4001 10.74L13.6601 10C13.8801 9.54 14.0001 9.04 14.0001 8.5C14.0001 7.57174 13.6314 6.6815 12.975 6.02513C12.3186 5.36875 11.4284 5 10.5001 5C9.96014 5 9.46014 5.12 9.00014 5.34L8.26014 4.6C8.92014 4.22 9.68014 4 10.5001 4ZM7.00014 8.5C7.00014 9.42826 7.36889 10.3185 8.02526 10.9749C8.68164 11.6313 9.57188 12 10.5001 12C11.1701 12 11.7901 11.81 12.3201 11.5L7.50014 6.68C7.19014 7.21 7.00014 7.83 7.00014 8.5Z"
                        fill="#808080"
                      />
                    </svg>
                  </span>
                  <div class="input__message input__message-login"></div>
                </div>
                <div class="enter__avatar">
                  <span class="enter__subtitle">Choose avatar</span>
                  <div class="enter__wrap">
                    <div class="enter__avatar-elem enter__avatar-elem_checked">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.625 11.25C20.625 12.7418 20.0324 14.1726 18.9775 15.2275C17.9226 16.2824 16.4918 16.875 15 16.875C13.5082 16.875 12.0774 16.2824 11.0225 15.2275C9.96763 14.1726 9.375 12.7418 9.375 11.25C9.375 9.75816 9.96763 8.32742 11.0225 7.27252C12.0774 6.21763 13.5082 5.625 15 5.625C16.4918 5.625 17.9226 6.21763 18.9775 7.27252C20.0324 8.32742 20.625 9.75816 20.625 11.25Z"
                          fill="#333333"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM15 1.875C12.5283 1.87513 10.1069 2.57318 8.0145 3.8888C5.92207 5.20442 4.24366 7.08414 3.17243 9.31161C2.10121 11.5391 1.68072 14.0238 1.95937 16.4797C2.23802 18.9356 3.20447 21.2629 4.7475 23.1937C6.07875 21.0487 9.00938 18.75 15 18.75C20.9906 18.75 23.9194 21.0469 25.2525 23.1937C26.7955 21.2629 27.762 18.9356 28.0406 16.4797C28.3193 14.0238 27.8988 11.5391 26.8276 9.31161C25.7563 7.08414 24.0779 5.20442 21.9855 3.8888C19.8931 2.57318 17.4717 1.87513 15 1.875Z"
                          fill="#333333"
                        />
                      </svg>
                    </div>
                    <div class="enter__avatar-elem">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.625 11.25C20.625 12.7418 20.0324 14.1726 18.9775 15.2275C17.9226 16.2824 16.4918 16.875 15 16.875C13.5082 16.875 12.0774 16.2824 11.0225 15.2275C9.96763 14.1726 9.375 12.7418 9.375 11.25C9.375 9.75816 9.96763 8.32742 11.0225 7.27252C12.0774 6.21763 13.5082 5.625 15 5.625C16.4918 5.625 17.9226 6.21763 18.9775 7.27252C20.0324 8.32742 20.625 9.75816 20.625 11.25Z"
                          fill="#333333"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM15 1.875C12.5283 1.87513 10.1069 2.57318 8.0145 3.8888C5.92207 5.20442 4.24366 7.08414 3.17243 9.31161C2.10121 11.5391 1.68072 14.0238 1.95937 16.4797C2.23802 18.9356 3.20447 21.2629 4.7475 23.1937C6.07875 21.0487 9.00938 18.75 15 18.75C20.9906 18.75 23.9194 21.0469 25.2525 23.1937C26.7955 21.2629 27.762 18.9356 28.0406 16.4797C28.3193 14.0238 27.8988 11.5391 26.8276 9.31161C25.7563 7.08414 24.0779 5.20442 21.9855 3.8888C19.8931 2.57318 17.4717 1.87513 15 1.875Z"
                          fill="#333333"
                        />
                      </svg>
                    </div>
                    <div class="enter__avatar-elem">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.625 11.25C20.625 12.7418 20.0324 14.1726 18.9775 15.2275C17.9226 16.2824 16.4918 16.875 15 16.875C13.5082 16.875 12.0774 16.2824 11.0225 15.2275C9.96763 14.1726 9.375 12.7418 9.375 11.25C9.375 9.75816 9.96763 8.32742 11.0225 7.27252C12.0774 6.21763 13.5082 5.625 15 5.625C16.4918 5.625 17.9226 6.21763 18.9775 7.27252C20.0324 8.32742 20.625 9.75816 20.625 11.25Z"
                          fill="#333333"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM15 1.875C12.5283 1.87513 10.1069 2.57318 8.0145 3.8888C5.92207 5.20442 4.24366 7.08414 3.17243 9.31161C2.10121 11.5391 1.68072 14.0238 1.95937 16.4797C2.23802 18.9356 3.20447 21.2629 4.7475 23.1937C6.07875 21.0487 9.00938 18.75 15 18.75C20.9906 18.75 23.9194 21.0469 25.2525 23.1937C26.7955 21.2629 27.762 18.9356 28.0406 16.4797C28.3193 14.0238 27.8988 11.5391 26.8276 9.31161C25.7563 7.08414 24.0779 5.20442 21.9855 3.8888C19.8931 2.57318 17.4717 1.87513 15 1.875Z"
                          fill="#333333"
                        />
                      </svg>
                    </div>
                    <div class="enter__avatar-elem">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.625 11.25C20.625 12.7418 20.0324 14.1726 18.9775 15.2275C17.9226 16.2824 16.4918 16.875 15 16.875C13.5082 16.875 12.0774 16.2824 11.0225 15.2275C9.96763 14.1726 9.375 12.7418 9.375 11.25C9.375 9.75816 9.96763 8.32742 11.0225 7.27252C12.0774 6.21763 13.5082 5.625 15 5.625C16.4918 5.625 17.9226 6.21763 18.9775 7.27252C20.0324 8.32742 20.625 9.75816 20.625 11.25Z"
                          fill="#333333"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM15 1.875C12.5283 1.87513 10.1069 2.57318 8.0145 3.8888C5.92207 5.20442 4.24366 7.08414 3.17243 9.31161C2.10121 11.5391 1.68072 14.0238 1.95937 16.4797C2.23802 18.9356 3.20447 21.2629 4.7475 23.1937C6.07875 21.0487 9.00938 18.75 15 18.75C20.9906 18.75 23.9194 21.0469 25.2525 23.1937C26.7955 21.2629 27.762 18.9356 28.0406 16.4797C28.3193 14.0238 27.8988 11.5391 26.8276 9.31161C25.7563 7.08414 24.0779 5.20442 21.9855 3.8888C19.8931 2.57318 17.4717 1.87513 15 1.875Z"
                          fill="#333333"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="enter__avatar">
                  <span class="enter__subtitle">Or upload your photo</span>
                  <button class="button button_icon" type="button">
                    <span class="button__text">Upload</span>
                    <svg
                      width="23"
                      height="21"
                      viewBox="0 0 23 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 3V0H5V3H8V5H5V8H3V5H0V3H3ZM6 9V6H9V3H16L17.83 5H21C22.1 5 23 5.9 23 7V19C23 20.1 22.1 21 21 21H5C3.9 21 3 20.1 3 19V9H6ZM13 18C15.76 18 18 15.76 18 13C18 10.24 15.76 8 13 8C10.24 8 8 10.24 8 13C8 15.76 10.24 18 13 18ZM9.8 13C9.8 14.77 11.23 16.2 13 16.2C14.77 16.2 16.2 14.77 16.2 13C16.2 11.23 14.77 9.8 13 9.8C11.23 9.8 9.8 11.23 9.8 13Z"
                        fill="#333333"
                      />
                    </svg>
                  </button>
                </div>
                <button class="button button_disabled button__form_reg" type="submit">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        `;
  }

  addEvents() {
    const linkLogin = document.querySelector('.link_enter_login');
    const linkContinue = document.querySelector('.link_enter_continue');
    linkLogin.addEventListener('click', () => {
      taskController.createLoginView();
    });

    linkContinue.addEventListener('click', () => {
      taskController.createMainView();
    });

    const loginLabel = document.querySelector('.label_login');
    const loginInput = document.querySelector('#login');
    const errorMessageLogin = document.querySelector('.input__message-login');

    loginInput.addEventListener('keyup', () => {
      errorMessageLogin.innerHTML = '';
      if (
        !(loginInput.value.length && Helper.checkLatinLetters(loginInput.value))
      ) {
        Helper.changeStatusInput(
          loginLabel,
          loginInput,
          'label_validate',
          'input_validate',
          'label_error',
          'input_error'
        );
      } else {
        Helper.changeStatusInput(
          loginLabel,
          loginInput,
          'label_error',
          'input_error',
          'label_validate',
          'input_validate'
        );
      }
    });

    const nameLabel = document.querySelector('.label_name');
    const nameInput = document.querySelector('#name');
    const errorMessageName = document.querySelector('.input__message-name');

    nameInput.addEventListener('keyup', () => {
      errorMessageName.innerHTML = '';
      if (!(nameInput.value.length && Helper.isValidName(nameInput.value))) {
        Helper.changeStatusInput(
          nameLabel,
          nameInput,
          'label_validate',
          'input_validate',
          'label_error',
          'input_error'
        );
      } else {
        Helper.changeStatusInput(
          nameLabel,
          nameInput,
          'label_error',
          'input_error',
          'label_validate',
          'input_validate'
        );
      }
    });

    const passwordLabel = document.querySelector('.label_password');
    const passwordInput = document.querySelector('#password');

    passwordInput.addEventListener('keyup', () => {
      if (
        !(
          passwordInput.value.length &&
          Helper.isValidPassword(passwordInput.value)
        )
      ) {
        Helper.changeStatusInput(
          passwordLabel,
          passwordInput,
          'label_validate',
          'input_validate',
          'label_error',
          'input_error'
        );
      } else {
        Helper.changeStatusInput(
          passwordLabel,
          passwordInput,
          'label_error',
          'input_error',
          'label_validate',
          'input_validate'
        );
      }
    });

    const passwordRepeatLabel = document.querySelector(
      '.label_repeat-password'
    );
    const passwordRepeatInput = document.querySelector('#repeat_password');

    passwordRepeatInput.addEventListener('keyup', () => {
      if (
        !(
          passwordRepeatInput.value.length &&
          Helper.isValidPassword(passwordRepeatInput.value) &&
          passwordInput.value === passwordRepeatInput.value
        )
      ) {
        Helper.changeStatusInput(
          passwordRepeatLabel,
          passwordRepeatInput,
          'label_validate',
          'input_validate',
          'label_error',
          'input_error'
        );
      } else {
        Helper.changeStatusInput(
          passwordRepeatLabel,
          passwordRepeatInput,
          'label_error',
          'input_error',
          'label_validate',
          'input_validate'
        );
      }
    });

    const buttonSubmit = document.querySelector('.button__form_reg');
    addEventListener('keyup', () => {
      if (
        loginInput.classList.contains('input_validate') &&
        passwordInput.classList.contains('input_validate') &&
        nameInput.classList.contains('input_validate') &&
        passwordRepeatInput.classList.contains('input_validate')
      ) {
        buttonSubmit.disabled = false;
        buttonSubmit.className = 'button button__form_reg button_primary';
      } else {
        buttonSubmit.className = 'button button__form_reg button_disabled';
        buttonSubmit.disabled = true;
      }
    });

    const form = document.querySelector('form');

    form.addEventListener('submit', () => {
      userCollection.add(
        loginInput.value,
        passwordInput.value,
        passwordRepeatInput.value,
        nameInput.value
      );
      setCurrentUser(loginInput.value);
    });
  }
}
