npm install
npm run build
cp -ar ~/domeland_nft_staking/mint_onNginx/* /var/www/app-domeland/mint/
cp -ar ~/domeland_nft_staking/mint_onNginx/images /var/www/app-domeland/static/

npm run pm2
