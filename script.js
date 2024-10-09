// 获取登录表单
const loginForm = document.getElementById('login-form');

// 监听登录表单提交事件
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 这里可以添加登录逻辑，例如验证用户名和密码是否匹配，然后跳转到主页

    if (username === '123456' && password === '123456') {
        window.location.href = 'index.html'; // 如果用户名和密码匹配，跳转到主页
    } else {
        alert('Invalid username or password');
    }
});

// 获取注册表单
const registerForm = document.getElementById('register-form');

// 监听注册表单提交事件
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // 这里可以添加注册逻辑，例如将新用户的信息存储起来，然后跳转到登录页面

    alert('Registered successfully! Please login with your new account.');
    window.location.href = 'login.html'; // 注册成功后跳转到登录页面
});


// 项目列表
const projectsList = document.getElementById('projects');
const projectForm = document.getElementById('project-form');

// 聊天
const chatMessages = document.getElementById('messages');
const chatForm = document.getElementById('chat-form');

// 项目数组
const projects = [];

// 提交项目
projectForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const projectName = document.getElementById('project-name').value;
    const projectDescription = document.getElementById('project-description').value;
    const lookingForPartner = document.getElementById('project-partner').checked;

    const project = {
        name: projectName,
        description: projectDescription,
        lookingForPartner: lookingForPartner
    };

    projects.push(project);

    displayProjects();

    // 清空表单
    document.getElementById('project-name').value = '';
    document.getElementById('project-description').value = '';
    document.getElementById('project-partner').checked = false;
});

// 显示项目列表
function displayProjects() {
    projectsList.innerHTML = '';

    projects.forEach(function(project) {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${project.name}</strong>
            <p>${project.description}</p>
            <p>Looking for Partner: ${project.lookingForPartner ? 'Yes' : 'No'}</p>
        `;
        projectsList.appendChild(li);
    });
}

// 提交聊天消息
chatForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = message;
        chatMessages.appendChild(li);
        messageInput.value = '';
    }
});
