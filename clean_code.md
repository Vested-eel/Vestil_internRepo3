How unit tests help keep code clean

  - Catch errors early: Unit tests immediately flag when a function breaks, so bugs don’t pile up unnoticed.

  - Prevent regressions: Once a test passes, it acts like a guardrail — if future changes break it.

  - Encourage small, focused functions: Writing tests pushes I to design functions that are easier to test, which usually means cleaner, more modular code.

  - Improve confidence: The ability to refactor or add features without fear, because tests confirm the code still works.

Issues you found while testing

  - Version mismatch: Jest v30 didn’t work with my setup, had to downgrade to v29.

  - OneDrive interference: Sync prompts made dependency changes confusing, since npm installs looked like mass deletions.

  - Test detection errors: Even with code written, Jest initially reported “no tests found” until, I reset the file and ensured the test block was properly recognized.

  - Export mismatch: At first, only add was exported from utils.js, so I had to expand exports to include subtract for testing.