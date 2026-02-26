// Demo Data for AI Security Governance Platform

const DEMO_DATA = {
    threats: [
        {
            id: 'thr-001',
            type: 'Prompt Injection',
            severity: 'critical',
            title: 'Advanced Jailbreak Attempt Detected',
            description: 'User attempted to bypass safety filters using DAN (Do Anything Now) technique',
            agent: 'GPT-4 Assistant',
            user: 'john.doe@company.com',
            timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
            status: 'blocked',
            riskScore: 95
        },
        {
            id: 'thr-002',
            type: 'Data Exfiltration',
            severity: 'critical',
            title: 'Sensitive Data Leakage Prevented',
            description: 'AI response contained customer PII that was automatically redacted',
            agent: 'Claude 3.5 Analytics',
            user: 'sarah.smith@company.com',
            timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
            status: 'mitigated',
            riskScore: 88
        },
        {
            id: 'thr-003',
            type: 'Prompt Injection',
            severity: 'critical',
            title: 'System Role Manipulation',
            description: 'Attempt to change AI system role to bypass security controls',
            agent: 'OpenAI GPT-3.5',
            user: 'mike.jones@company.com',
            timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
            status: 'blocked',
            riskScore: 92
        },
        {
            id: 'thr-004',
            type: 'Adversarial Input',
            severity: 'high',
            title: 'SQL Injection Pattern Detected',
            description: 'Prompt contained SQL injection syntax attempting to manipulate AI behavior',
            agent: 'Azure OpenAI Service',
            user: 'alex.brown@company.com',
            timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
            status: 'blocked',
            riskScore: 76
        },
        {
            id: 'thr-005',
            type: 'Policy Violation',
            severity: 'high',
            title: 'Unauthorized Model Access',
            description: 'User attempted to access GPT-4 without proper authorization',
            agent: 'GPT-4',
            user: 'emily.davis@company.com',
            timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
            status: 'blocked',
            riskScore: 68
        },
        {
            id: 'thr-006',
            type: 'Behavioral Anomaly',
            severity: 'high',
            title: 'Unusual Activity Pattern',
            description: 'Agent showing 300% increase in API calls in last hour',
            agent: 'Gemini Pro',
            user: 'system-bot@company.com',
            timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
            status: 'investigating',
            riskScore: 71
        },
        {
            id: 'thr-007',
            type: 'Model Poisoning',
            severity: 'high',
            title: 'Suspicious Training Data',
            description: 'Potential attempt to poison model with biased training examples',
            agent: 'Claude 3',
            user: 'data-pipeline@company.com',
            timestamp: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
            status: 'investigating',
            riskScore: 79
        }
    ],

    agents: [
        {
            id: 'agent-001',
            name: 'GPT-4 Production Assistant',
            type: 'bot',
            vendor: 'OpenAI',
            model: 'gpt-4',
            owner: 'engineering@company.com',
            purpose: 'Customer support automation',
            status: 'active',
            trustScore: 87,
            isShadowAI: false,
            interactions: 15420,
            lastActive: new Date(Date.now() - 1000 * 60 * 5)
        },
        {
            id: 'agent-002',
            name: 'Claude Code Review Bot',
            type: 'bot',
            vendor: 'Anthropic',
            model: 'claude-3-5-sonnet',
            owner: 'devops@company.com',
            purpose: 'Automated code reviews',
            status: 'active',
            trustScore: 92,
            isShadowAI: false,
            interactions: 8340,
            lastActive: new Date(Date.now() - 1000 * 60 * 2)
        },
        {
            id: 'agent-003',
            name: 'Marketing Content Generator',
            type: 'bot',
            vendor: 'OpenAI',
            model: 'gpt-3.5-turbo',
            owner: 'marketing@company.com',
            purpose: 'Content creation and optimization',
            status: 'active',
            trustScore: 78,
            isShadowAI: false,
            interactions: 12560,
            lastActive: new Date(Date.now() - 1000 * 60 * 15)
        },
        {
            id: 'agent-004',
            name: 'Unauthorized ChatGPT Instance',
            type: 'bot',
            vendor: 'OpenAI',
            model: 'gpt-4',
            owner: 'unknown',
            purpose: 'Unknown',
            status: 'shadow',
            trustScore: 32,
            isShadowAI: true,
            interactions: 2340,
            lastActive: new Date(Date.now() - 1000 * 60 * 30)
        },
        {
            id: 'agent-005',
            name: 'Finance Analytics AI',
            type: 'bot',
            vendor: 'Microsoft',
            model: 'azure-openai-gpt-4',
            owner: 'finance@company.com',
            purpose: 'Financial reporting and analysis',
            status: 'active',
            trustScore: 95,
            isShadowAI: false,
            interactions: 5670,
            lastActive: new Date(Date.now() - 1000 * 60 * 60)
        },
        {
            id: 'agent-006',
            name: 'HR Assistant',
            type: 'bot',
            vendor: 'Google',
            model: 'gemini-pro',
            owner: 'hr@company.com',
            purpose: 'Employee onboarding support',
            status: 'active',
            trustScore: 84,
            isShadowAI: false,
            interactions: 3420,
            lastActive: new Date(Date.now() - 1000 * 60 * 10)
        }
    ],

    policies: [
        {
            id: 'pol-001',
            name: 'PII Protection Policy',
            type: 'Data Loss Prevention',
            description: 'Block or redact personally identifiable information in prompts and responses',
            status: 'enabled',
            violations: 12,
            lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)
        },
        {
            id: 'pol-002',
            name: 'Model Access Control',
            type: 'Access Control',
            description: 'Restrict GPT-4 access to authorized users only',
            status: 'enabled',
            violations: 5,
            lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3)
        },
        {
            id: 'pol-003',
            name: 'Rate Limiting',
            type: 'Usage Limits',
            description: 'Limit API calls to 1000 requests per hour per user',
            status: 'enabled',
            violations: 8,
            lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14)
        },
        {
            id: 'pol-004',
            name: 'GDPR Compliance',
            type: 'Regulatory Compliance',
            description: 'Ensure all AI processing complies with GDPR requirements',
            status: 'enabled',
            violations: 2,
            lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1)
        }
    ],

    violations: [
        {
            id: 'vio-001',
            policyId: 'pol-001',
            policyName: 'PII Protection Policy',
            agentId: 'agent-001',
            agentName: 'GPT-4 Production Assistant',
            severity: 'high',
            description: 'Email addresses detected in prompt',
            timestamp: new Date(Date.now() - 1000 * 60 * 20),
            remediated: true
        },
        {
            id: 'vio-002',
            policyId: 'pol-002',
            policyName: 'Model Access Control',
            agentId: 'agent-004',
            agentName: 'Unauthorized ChatGPT Instance',
            severity: 'critical',
            description: 'Unauthorized access to GPT-4 model',
            timestamp: new Date(Date.now() - 1000 * 60 * 45),
            remediated: true
        },
        {
            id: 'vio-003',
            policyId: 'pol-003',
            policyName: 'Rate Limiting',
            agentId: 'agent-003',
            agentName: 'Marketing Content Generator',
            severity: 'medium',
            description: 'Exceeded 1000 requests per hour limit',
            timestamp: new Date(Date.now() - 1000 * 60 * 90),
            remediated: false
        },
        {
            id: 'vio-004',
            policyId: 'pol-001',
            policyName: 'PII Protection Policy',
            agentId: 'agent-002',
            agentName: 'Claude Code Review Bot',
            severity: 'high',
            description: 'Credit card number pattern detected',
            timestamp: new Date(Date.now() - 1000 * 60 * 120),
            remediated: true
        }
    ],

    compliance: [
        {
            id: 'comp-001',
            framework: 'NIST AI RMF',
            score: 94,
            status: 'compliant',
            controls: {
                total: 45,
                implemented: 42,
                pending: 3,
                failed: 0
            },
            lastAudit: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15),
            nextAudit: new Date(Date.now() + 1000 * 60 * 60 * 24 * 75)
        },
        {
            id: 'comp-002',
            framework: 'ISO 42001',
            score: 91,
            status: 'compliant',
            controls: {
                total: 38,
                implemented: 35,
                pending: 2,
                failed: 1
            },
            lastAudit: new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
            nextAudit: new Date(Date.now() + 1000 * 60 * 60 * 24 * 70)
        },
        {
            id: 'comp-003',
            framework: 'SOC 2 Type II',
            score: 96,
            status: 'compliant',
            controls: {
                total: 52,
                implemented: 50,
                pending: 2,
                failed: 0
            },
            lastAudit: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
            nextAudit: new Date(Date.now() + 1000 * 60 * 60 * 24 * 80)
        },
        {
            id: 'comp-004',
            framework: 'HIPAA',
            score: 87,
            status: 'partial',
            controls: {
                total: 28,
                implemented: 24,
                pending: 3,
                failed: 1
            },
            lastAudit: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30),
            nextAudit: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60)
        }
    ],

    incidents: [
        {
            id: 'inc-001',
            title: 'Multiple Jailbreak Attempts from Finance Team',
            severity: 'high',
            status: 'investigating',
            description: 'Series of sophisticated prompt injection attempts detected from finance department',
            assignedTo: 'Security Team',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
            affectedAgents: ['agent-005'],
            threatsDetected: 5
        },
        {
            id: 'inc-002',
            title: 'Shadow AI Discovery - Unauthorized GPT-4 Usage',
            severity: 'critical',
            status: 'resolved',
            description: 'Discovered unauthorized GPT-4 instance being used without security controls',
            assignedTo: 'Compliance Team',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
            resolvedAt: new Date(Date.now() - 1000 * 60 * 60 * 4),
            affectedAgents: ['agent-004'],
            threatsDetected: 12
        },
        {
            id: 'inc-003',
            title: 'Data Exfiltration Attempt',
            severity: 'critical',
            status: 'resolved',
            description: 'User attempted to extract customer database through AI agent',
            assignedTo: 'Security Team',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
            resolvedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4),
            affectedAgents: ['agent-001'],
            threatsDetected: 3
        }
    ],

    metrics: {
        securityPostureScore: 78,
        postureHistory: [66, 68, 71, 73, 75, 76, 78],
        totalAgents: 247,
        activeAgents: 189,
        shadowAI: 58,
        activeThreats: 7,
        threatsBlocked: 1243,
        threatsTrend: [45, 52, 48, 61, 73, 58, 67],
        complianceAverage: 92,
        incidentsThisMonth: 12,
        incidentsLastMonth: 18,
        mttr: 4.5, // minutes
        detectionRate: 92, // percentage
        falsePositiveRate: 4.2 // percentage
    }
};

// Simulate real-time data updates
let simulationActive = true;

function simulateRealTimeUpdates() {
    if (!simulationActive) return;

    // Randomly update metrics slightly
    setInterval(() => {
        if (!simulationActive) return;
        
        // Simulate posture score fluctuation
        const currentScore = parseInt(document.getElementById('posture-score')?.textContent || '78');
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        const newScore = Math.max(70, Math.min(85, currentScore + change));
        
        if (document.getElementById('posture-score')) {
            document.getElementById('posture-score').textContent = newScore;
        }

        // Simulate new threats occasionally
        if (Math.random() < 0.1) { // 10% chance
            const threatCount = document.getElementById('threat-count');
            if (threatCount) {
                const current = parseInt(threatCount.textContent);
                threatCount.textContent = current + 1;
            }
        }
    }, 10000); // Every 10 seconds
}

function toggleSimulation() {
    simulationActive = !simulationActive;
    const banner = document.querySelector('.demo-banner p');
    if (banner) {
        banner.textContent = simulationActive 
            ? 'This is a demonstration of the AI Security Governance Platform. Real-time data simulation active.'
            : 'This is a demonstration of the AI Security Governance Platform. Real-time simulation paused.';
    }
}

// Format timestamp helper
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

// Initialize simulation when page loads
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        simulateRealTimeUpdates();
    });
}