# Ops notes moved out of STATE.md (2026-10-12)

- Lockfile: regenerate on a clean tree only; verify in Docker `node:24` (`npm ci` + build).
- Cloudflare dashboard via Paseo browser (Ryan logs in); React inputs need `browser_evaluate`.
- Model seats: SiliconFlow (`SILICONFLOW_API_KEY`) has Kimi K2.6, DeepSeek V4 Pro, GLM 5.3; run calls one or two at
  a time (parallel calls hit SSL errors). Codex: `codex exec --skip-git-repo-check -s read-only < prompt.md`.
- Mail password: `python ../business/ops/rotate_smtp.py` rotates it and sets SMTP_PASS on all four Workers
  (gesedge, gesedge-preview, huanqiao, huanqiao-preview). The value is never stored.
- Model seats (2026-10-14): Kimi CLI hit its weekly quota; SiliconFlow `Pro/moonshotai/Kimi-K2.6` works but long merges
  take >10 min (use a 30-min read timeout). DeepSeek direct (`deepseek-v4-pro`) needs max_tokens ≥ 32k or reasoning
  eats the answer (empty output). Gemini CLI headless needs `--skip-trust`. Kimi misjudges today's date.
- Forms: ryan@gesedge.com via Purelymail + KV copy (730-day TTL). Lark to Ryan: lark-cli bot DM (memory
  `reference_lark_send_to_ryan`).
