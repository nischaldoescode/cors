require('dotenv').config();
const PORT = process.env.PORT || 3000;
const fetch = require('node-fetch');

async function testProxy() {
    try {
        console.log('Testing CORS proxy...');
        const response = await fetch(`http://localhost:${PORT}/request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: 'https://tmstr5.shadowlandschronicles.com/pl/H4sIAAAAAAAAAw3O25KCIAAA0F_Ca7lvuyNoljiBgPCmQjWE1pi56dfvni84YX9pdWSAAUnYXrqd3.6DIOy7_S6Ou97EXwoVrUl5Zhj_9F65tMPnl1sy8YHI06Y9ziKofc3VdhM8e23SyYihgp3FK6iEWklwnbhQh3rUgDXFu0NoJjkSx00JOt49mn0aBWVQu5.53AgwyN3p.gqpIA.do4PKnlLyEnT.LBicg6MHQce_feN.YDuWi1yTFDMS9qmyrY.f1LnHeUCnUlwDYYu4qtGtB3PFa22VCEM5zG9p2cSsU_VWYN7gmVnd1NaNNC9O_4cVp3ii6X3BMJo0TB5mRD7Ob5WmSSyyElBLlrN7Qr2B5A_v31gPQQEAAA--/master.m3u8',
                method: 'GET'
            })
        });

        console.log('Response status:', response.status);
        const data = await response.text();
        console.log('Response data:', data);
        
    } catch (error) {
        console.error('Test failed:', error.message);
    }
}

testProxy();
