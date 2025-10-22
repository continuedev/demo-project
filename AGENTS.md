# 🚀 Continue Agents - Ready-to-Use Prompts

Copy and paste these prompts directly into [Mission Control in the Continue Hub](https://hub.continue.dev/agents) to test different Agents. Be sure to select your fork of this repository and the branch you want the Agent to use. Each prompt is designed to demonstrate a specific capability of Continue Agents.

<img width="895" height="349" alt="Mission-control" src="https://github.com/user-attachments/assets/01026dac-d663-4868-a297-5c1788da4611" />

---

## 1. 🐛 Bug Fixing Agent

**The "Wow" Moment - Fix a TypeError in <60 seconds**

```
Fix the TypeError in api/users.ts that occurs when a user is not found. Make sure the functions handle undefined users gracefully and all tests pass.
```

**Expected Result:** 
- PR with null checks added
- All tests passing
- Clean, defensive code

---

## 2. 🧹 Code Cleanup & Standardization

**Clean up the entire codebase**

```
Clean up the codebase according to ESLint and Prettier rules. Remove all console.logs, unused imports, fix formatting issues, and ensure consistent code style throughout.
```

**Alternative prompts:**
```
Run ESLint with --fix flag on all TypeScript files and commit the changes
```

```
Remove all unused imports and variables from the codebase
```

**Expected Result:**
- Consistent formatting
- No lint warnings
- Clean, professional code

---

## 3. 🔐 Security Check Agent

**Find and fix security vulnerabilities**

```
Run a security audit on npm dependencies, identify any vulnerabilities, and update the affected packages to secure versions. Make sure to update both package.json and package-lock.json.
```

**Alternative prompt:**
```
Check for the vulnerable lodash version in package.json and update it to the latest secure version
```

**Expected Result:**
- Updated lodash from 4.17.19 to latest
- Clean npm audit report
- Updated lock file

---

## 4. 🧪 Test Generation Agent

**Write comprehensive tests**

```
Write complete unit tests for all functions in src/utils/math.ts. Include edge cases like division by zero, negative numbers for factorial, and empty arrays for average and findMax functions.
```

**More specific prompts:**
```
Add missing tests for the multiply, factorial, average, and findMax functions in __tests__/math.test.ts
```

```
Write tests that achieve 100% code coverage for src/utils/math.ts
```

**Expected Result:**
- Full test coverage
- Edge cases handled
- All tests passing

---

## 5. 📝 Documentation Generation Agent

**Add comprehensive documentation**

```
Add JSDoc comments to all functions, methods, and classes in src/helpers/logger.ts. Include parameter descriptions, return types, and usage examples where appropriate.
```

**Alternative prompts:**
```
Document all public APIs in the src/helpers directory with JSDoc comments
```

```
Add inline documentation explaining what each method does in the Logger class
```

**Expected Result:**
- Complete JSDoc coverage
- Clear parameter descriptions
- Usage examples included

---

## 6. 🎯 Combined Agents

**Fix multiple issues at once**

```
Fix the TypeError bug in api/users.ts, add complete unit tests for it, and ensure all code follows ESLint rules
```

```
Update all vulnerable dependencies, add missing tests for math.ts, and document all functions in logger.ts
```

---

## 7. 🏗️ Feature Enhancement (Bonus)

**Add a new utility function**

```
Add a new function called 'fibonacci' to src/utils/math.ts that calculates the nth Fibonacci number. Include proper TypeScript types, error handling for negative inputs, and comprehensive unit tests.
```

```
Add a new function 'getAllAdmins' to api/users.ts that returns all users with admin role. Include proper types and tests.
```

**Expected Result:**
- New feature implemented
- Tests included
- Proper documentation

---

## 💡 Pro Tips

1. **Start simple:** Try the bug fix first (#1) for immediate satisfaction
2. **Be specific:** The more detailed your prompt, the better the result
3. **Combine tasks:** Agents can handle multiple related tasks
4. **Check the PR:** Always review the generated pull request
5. **Iterate:** If the first result isn't perfect, refine your prompt

---


## 📊 Agent Success Checklist

Track your progress:

- [ ] Bug Fix Agent - TypeError fixed
- [ ] Code Cleanup - 0 lint warnings
- [ ] Security Check - 0 vulnerabilities  
- [ ] Test Generation - >80% coverage
- [ ] Documentation - All functions documented
- [ ] Feature Addition - New function working

---

## 🎯 Next Steps

Once you've completed the basic Agent tasks, create agents to solve your own tasks:

1. **[Create Your Own Agent](https://docs.continue.dev/hub/agents/intro#quickstart)**: You've used your default agent. Now it's time to build your own.
2. **[Test an Agent from the Hub](https://hub.continue.dev/?type=agents)**: Use premade agents to complete your tasks.
   

---

**Remember:** These prompts are starting points. Feel free to modify them or create your own!
