#!/bin/sh
# Smoke test of live gesedge.com: pages, old-URL 301s, hosts, headers, video byte ranges, indexing.
#   sh scripts/qa/smoke.sh        (uses curl --noproxy for Ryan's proxy)
B=https://gesedge.com
c() { curl -s --noproxy '*' -o /dev/null -w '%{http_code}' "$@"; }
r() { curl -s --noproxy '*' -o /dev/null -w '%{http_code} -> %{redirect_url}' "$@"; }
echo "== pages"; for p in / /services/ /work/ /about/ /exporters/ /contact/ /privacy/ /contact/sent/ /robots.txt /sitemap.xml /og-en.png /favicon.ico /favicon.svg /apple-touch-icon.png; do printf "%-18s %s\n" $p "$(c $B$p)"; done
printf "%-18s %s\n" "/nope/ (404)" "$(c $B/nope/)"
echo "== old URLs"; for p in /case-studies /case-studies/bloodline-charters /blog /blog/why-80-percent-of-ai-projects-fail /admin /about /contact /services; do printf "%-44s %s\n" $p "$(r $B$p)"; done
echo "== hosts"; printf "%-30s %s\n" www "$(r https://www.gesedge.com/work/)"; printf "%-30s %s\n" http "$(r http://gesedge.com/)"
echo "== headers"; curl -s --noproxy '*' -D - -o /dev/null $B/ | grep -iE "strict-transport|x-content-type|referrer-policy|x-robots|content-type" 
echo "== media"; curl -s --noproxy '*' -D - -o /dev/null -H "Range: bytes=0-1" $B/media/joint-800.mp4 | grep -iE "^HTTP|content-range"
echo "== content"; H=$(curl -s --noproxy '*' $B/); echo "$H" | grep -c 'noindex' | sed 's/^/noindex count: /'; echo "$H" | grep -o '<link rel="canonical" href="[^"]*"'; echo "$H" | grep -c 'huanqiao' | sed 's/^/huanqiao links: /'; echo "$H" | grep -o '<title>[^<]*</title>'
