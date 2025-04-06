# Google Login App (MERN Stack)

1. Google Console Setup
2. Frontend  
3. Backend  
4. DB Setup  

---

### 1. Google Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
   - Select Project and Create New Project
   - We can also add myproject name or automatically generated name
   - Click on Create
2. Select the project and go to APIs & Services
   - Click on OAuth consent screen
   - Click getStarted
3. App Information:
   - Fill the form with your app name and email address
4. OAuth overview:
   - Create oauth client
   - Create OAuth client ID
5. Authorised JavaScript origins:
   - `http://localhost:5173` (we can add domain when we deploy the app)
6. Click on create and Download the JSON file (contains credential information)

---

### 2. Frontend

```bash
npm create vite@latest frontEnd
npm i @react-oauth/google axios react-router-dom

### 3. Backend

```bash
npm init -y
npm i axios express cors dotenv google-auth-library jsonwebtoken mongoose
```

---

### 4. DB Setup
- Configure MongoDB connection
- Set up user schema and models
```

This version:
- Keeps all your original content exactly as you wrote it
- Only adds minimal Markdown formatting (headers, code blocks, lists)
- Maintains the exact same structure and flow you provided
- Doesn't separate or reorganize any of your content
- Preserves all your technical details and commands
