window.addEventListener('load', function() {
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // --- Navigation Logic ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const viewName = link.getAttribute('data-view');
            navLinks.forEach(l => l.classList.remove('nav-link-active', 'text-blue-400'));
            link.classList.add('nav-link-active', 'text-blue-400');
            ['dashboard', 'agents', 'confidential', 'policy', 'compliance', 'threats'].forEach(v => {
                const el = document.getElementById(`view-${v}`);
                if (el) el.classList.add('hidden');
            });
            const activeView = document.getElementById(`view-${viewName}`);
            if (activeView) activeView.classList.remove('hidden');
        });
    });

    // --- Policy Toggle Logic ---
    document.querySelectorAll('.policy-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const switchEl = toggle.querySelector('.w-10');
            switchEl.classList.toggle('toggle-active');
            switchEl.classList.toggle('bg-blue-600');
            switchEl.classList.toggle('bg-slate-700');
        });
    });

    // --- Simulation Logic ---
    let blockedCount = 42891;
    let threatsDetected = 0;
    const blockedEl = document.getElementById('blockedCount');
    const alertEl = document.getElementById('threatAlert');
    const labLog = document.getElementById('lab-log');
    const dashFeed = document.getElementById('threatFeed');

    const types = {
        'inj': { title: 'Prompt Injection', color: 'red-500', msg: 'Adversarial payload detected in Agent agnt-9021-x1 stream.' },
        'poison': { title: 'Model Poisoning', color: 'orange-500', msg: 'Anomalous training weights detected; rollout halted.' },
        'shadow': { title: 'Shadow AI', color: 'yellow-500', msg: 'Unauthorized connection to external LLM: "Groq-API".' },
        'egress': { title: 'Data Egress', color: 'purple-500', msg: 'Attempted exfiltration of customer PII intercepted.' }
    };

    document.querySelectorAll('.sim-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const typeKey = btn.getAttribute('data-type');
            const threat = typeKey === 'random' ? Object.values(types)[Math.floor(Math.random() * 4)] : types[typeKey];
            simulateThreat(threat);
        });
    });

    document.getElementById('clear-log')?.addEventListener('click', () => {
        labLog.innerHTML = '<div class="text-xs text-slate-600">Waiting for simulation trigger...</div>';
    });

    function simulateThreat(threat) {
        threatsDetected++;
        blockedCount++;
        
        if (blockedEl) blockedEl.innerText = blockedCount.toLocaleString();
        if (alertEl) {
            alertEl.innerText = `${threatsDetected} New`;
            alertEl.classList.add('text-red-500');
        }
        document.getElementById('notif-dot').classList.remove('hidden');

        const timestamp = new Date().toLocaleTimeString();
        const logItem = `
            <div class="animate-in slide-in-from-right-4 duration-300">
                <div class="flex justify-between items-start mb-2">
                    <span class="text-[10px] px-2 py-0.5 rounded border border-${threat.color}/30 text-${threat.color} bg-${threat.color}/10 uppercase font-bold">${threat.title}</span>
                    <span class="text-[10px] text-slate-600">${timestamp}</span>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-800 rounded text-xs text-slate-300 leading-relaxed">
                    <span class="text-slate-500 mr-2">>>></span> [BLOCKED] ${threat.msg}<br>
                    <span class="text-blue-500 mt-1 block">POLICY_ID: AIS-SEC-RULE-741 // RESPONSE: DROP_PACKET</span>
                </div>
            </div>
        `;

        if (labLog) {
            if (labLog.innerText.includes('Waiting')) labLog.innerHTML = '';
            labLog.insertAdjacentHTML('afterbegin', logItem);
        }

        // Update Dash Feed too
        const dashItem = `<div class="p-3 bg-slate-900/80 rounded-lg border-l-2 border-${threat.color} animate-in slide-in-from-top-2 duration-300">
            <div class="flex justify-between text-[10px] mb-1"><span class="text-${threat.color} font-bold uppercase tracking-wider">${threat.title}</span><span class="text-slate-500">BLOCKED</span></div>
            <p class="text-[11px] text-slate-300">${threat.msg}</p>
        </div>`;
        if (dashFeed) dashFeed.insertAdjacentHTML('afterbegin', dashItem);
    }

    setInterval(() => {
        const agentEl = document.getElementById('agentCount');
        if (agentEl) {
            const count = parseInt(agentEl.innerText.replace(',', ''));
            if(Math.random() > 0.8) agentEl.innerText = (count + Math.floor(Math.random() * 2)).toLocaleString();
        }
    }, 3000);
});