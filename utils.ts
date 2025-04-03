const sidebar=`
import type { Sidebar } from 'vocs';

// Note: careful of name clashing between sidebar items and docs pages.
// For example, 'Quickstart' is used for both sidebar and page names.
// If docs are part of a sidebar collection, they should be in a subfolder
export const sidebar: Sidebar = [
  {
    text: 'Overview',
    link: '/',
  },
  {
    text: 'Quickstart',
    link: '/quickstart',
  },
  {
    text: 'Bridges',
    link: '/chain/bridges-mainnet',
  },
  {
    text: 'Builder Kits',
    items: [
      {
        text: 'OnchainKit',
        collapsed: true,
        items: [
          {
            text: 'Introduction',
            items: [
              { text: 'Getting Started', link: '/builderkits/onchainkit/getting-started' },
              { text: 'Telemetry', link: '/builderkits/onchainkit/guides/telemetry' },
              { text: 'Troubleshooting', link: '/builderkits/onchainkit/guides/troubleshooting' },
            ],
          },
          {
            text: 'Installation',
            items: [
              { text: 'Next.js', link: '/builderkits/onchainkit/installation/nextjs' },
              { text: 'Vite', link: '/builderkits/onchainkit/installation/vite' },
              { text: 'Remix', link: '/builderkits/onchainkit/installation/remix' },
              { text: 'Astro', link: '/builderkits/onchainkit/installation/astro' },
            ],
          },
          {
            text: 'Config',
            collapsed: true,
            items: [
              {
                text: 'OnchainKitProvider',
                link: '/builderkits/onchainkit/config/onchainkit-provider',
              },
              {
                text: 'Custom Supplemental Providers',
                link: '/builderkits/onchainkit/config/supplemental-providers',
              },
            ],
          },
          {
            text: 'Guides',
            items: [
              {
                text: 'Lifecycle Status',
                link: '/builderkits/onchainkit/guides/lifecycle-status',
              },
              {
                text: 'Tailwind CSS Integration',
                link: '/builderkits/onchainkit/guides/tailwind',
              },
              {
                text: 'Theme Customization',
                link: '/builderkits/onchainkit/guides/themes',
              },
              {
                text: 'Use Basenames',
                link: '/builderkits/onchainkit/guides/use-basename-in-onchain-app',
              },
              {
                text: 'Use AI-powered IDEs',
                link: '/builderkits/onchainkit/guides/using-ai-powered-ides',
              },
            ],
          },
          {
            text: 'Templates',
            items: [
              {
                text: 'Onchain NFT App ↗',
                link: 'https://ock-mint.vercel.app/',
              },
              {
                text: 'Onchain Commerce App ↗',
                link: 'https://onchain-commerce-template.vercel.app/',
              },
              {
                text: 'Onchain Social Profile ↗',
                link: 'https://github.com/fakepixels/ock-identity',
              },
            ],
          },
          {
            text: 'Components',
            items: [
              {
                text: 'Appchain',
                collapsed: true,
                items: [
                  {
                    text: 'Bridge',
                    link: '/builderkits/onchainkit/appchain/bridge',
                  },
                ],
              },
              {
                text: 'Buy',
                collapsed: true,
                items: [
                  {
                    text: 'Buy',
                    link: '/builderkits/onchainkit/buy/buy',
                  },
                ],
              },
              {
                text: 'Checkout',
                collapsed: true,
                items: [
                  {
                    text: 'Checkout',
                    link: '/builderkits/onchainkit/checkout/checkout',
                  },
                ],
              },
              {
                text: 'Earn',
                collapsed: true,
                items: [
                  {
                    text: 'Earn',
                    link: '/builderkits/onchainkit/earn/earn',
                  },
                ],
              },
              {
                text: 'Fund',
                collapsed: true,
                items: [
                  {
                    text: 'FundButton',
                    link: '/builderkits/onchainkit/fund/fund-button',
                  },
                  {
                    text: 'FundCard',
                    link: '/builderkits/onchainkit/fund/fund-card',
                  },
                ],
              },
              {
                text: 'Identity',
                collapsed: true,
                items: [
                  {
                    text: 'Identity',
                    link: '/builderkits/onchainkit/identity/identity',
                  },
                  {
                    text: 'Address',
                    link: '/builderkits/onchainkit/identity/address',
                  },
                  {
                    text: 'Avatar',
                    link: '/builderkits/onchainkit/identity/avatar',
                  },
                  {
                    text: 'Badge',
                    link: '/builderkits/onchainkit/identity/badge',
                  },
                  {
                    text: 'IdentityCard',
                    link: '/builderkits/onchainkit/identity/identity-card',
                  },
                  {
                    text: 'Name',
                    link: '/builderkits/onchainkit/identity/name',
                  },
                  {
                    text: 'Socials',
                    link: '/builderkits/onchainkit/identity/socials',
                  },
                ],
              },
              {
                text: 'Mint',
                collapsed: true,
                items: [
                  {
                    text: 'NFTCard',
                    link: '/builderkits/onchainkit/mint/nft-card',
                  },
                  {
                    text: 'NFTMintCard',
                    link: '/builderkits/onchainkit/mint/nft-mint-card',
                  },
                ],
              },
              {
                text: 'Swap',
                collapsed: true,
                items: [
                  {
                    text: 'Swap',
                    link: '/builderkits/onchainkit/swap/swap',
                  },
                  {
                    text: 'SwapSettings',
                    link: '/builderkits/onchainkit/swap/swap-settings',
                  },
                ],
              },
              {
                text: 'Token',
                collapsed: true,
                items: [
                  {
                    text: 'TokenChip',
                    link: '/builderkits/onchainkit/token/token-chip',
                  },
                  {
                    text: 'TokenImage',
                    link: '/builderkits/onchainkit/token/token-image',
                  },
                  {
                    text: 'TokenRow',
                    link: '/builderkits/onchainkit/token/token-row',
                  },
                  {
                    text: 'TokenSearch',
                    link: '/builderkits/onchainkit/token/token-search',
                  },
                  {
                    text: 'TokenSelectDropdown',
                    link: '/builderkits/onchainkit/token/token-select-dropdown',
                  },
                ],
              },
              {
                text: 'Transaction',
                link: '/builderkits/onchainkit/transaction/transaction',
              },
              {
                text: 'Wallet',
                collapsed: true,
                items: [
                  {
                    text: 'Wallet',
                    link: '/builderkits/onchainkit/wallet/wallet',
                  },
                  {
                    text: 'WalletDropdownBasename',
                    link: '/builderkits/onchainkit/wallet/wallet-dropdown-basename',
                  },
                  {
                    text: 'WalletDropdownDisconnect',
                    link: '/builderkits/onchainkit/wallet/wallet-dropdown-disconnect',
                  },
                  {
                    text: 'WalletDropdownFundLink',
                    link: '/builderkits/onchainkit/wallet/wallet-dropdown-fund-link',
                  },
                  {
                    text: 'WalletDropdownLink',
                    link: '/builderkits/onchainkit/wallet/wallet-dropdown-link',
                  },
                  {
                    text: 'WalletIsland',
                    link: '/builderkits/onchainkit/wallet/wallet-island',
                  },
                  {
                    text: 'WalletModal',
                    link: '/builderkits/onchainkit/wallet/wallet-modal',
                  },
                ],
              },
            ],
          },
          {
            text: 'API',
            collapsed: true,
            items: [
              {
                text: 'Mint',
                items: [
                  {
                    text: 'getTokenDetails',
                    link: '/builderkits/onchainkit/api/get-token-details',
                  },
                  {
                    text: 'getMintDetails',
                    link: '/builderkits/onchainkit/api/get-mint-details',
                  },
                  {
                    text: 'buildMintTransaction',
                    link: '/builderkits/onchainkit/api/build-mint-transaction',
                  },
                ],
              },
              {
                text: 'Swap',
                items: [
                  {
                    text: 'buildSwapTransaction',
                    link: '/builderkits/onchainkit/api/build-swap-transaction',
                  },
                  {
                    text: 'getSwapQuote',
                    link: '/builderkits/onchainkit/api/get-swap-quote',
                  },
                ],
              },
              {
                text: 'Token',
                items: [
                  {
                    text: 'getTokens',
                    link: '/builderkits/onchainkit/api/get-tokens',
                  },
                ],
              },
              {
                text: 'Wallet',
                items: [
                  {
                    text: 'getPortfolios',
                    link: '/builderkits/onchainkit/api/get-portfolios',
                  },
                ],
              },
            ],
          },
          {
            text: 'Utilities',
            collapsed: true,
            items: [
              {
                text: 'Config',
                items: [
                  {
                    text: 'isBase',
                    link: '/builderkits/onchainkit/config/is-base',
                  },
                  {
                    text: 'isEthereum',
                    link: '/builderkits/onchainkit/config/is-ethereum',
                  },
                ],
              },
              {
                text: 'Earn',
                items: [
                  {
                    text: 'buildDepositToMorphoTx',
                    link: '/builderkits/onchainkit/api/build-deposit-to-morpho-tx',
                  },
                  {
                    text: 'buildWithdrawFromMorphoTx',
                    link: '/builderkits/onchainkit/api/build-withdraw-from-morpho-tx',
                  },
                  {
                    text: 'useBuildDepositToMorphoTx',
                    link: '/builderkits/onchainkit/hooks/use-build-deposit-to-morpho-tx',
                  },
                  {
                    text: 'useBuildWithdrawFromMorphoTx',
                    link: '/builderkits/onchainkit/hooks/use-build-withdraw-from-morpho-tx',
                  },
                  {
                    text: 'useEarnContext',
                    link: '/builderkits/onchainkit/hooks/use-earn-context',
                  },
                ],
              },
              {
                text: 'Fund',
                items: [
                  {
                    text: 'getOnrampBuyUrl',
                    link: '/builderkits/onchainkit/fund/get-onramp-buy-url',
                  },
                  {
                    text: 'fetchOnrampConfig',
                    link: '/builderkits/onchainkit/fund/fetch-onramp-config',
                  },
                  {
                    text: 'fetchOnrampQuote',
                    link: '/builderkits/onchainkit/fund/fetch-onramp-quote',
                  },
                  {
                    text: 'fetchOnrampOptions',
                    link: '/builderkits/onchainkit/fund/fetch-onramp-options',
                  },
                  {
                    text: 'fetchOnrampTransactionStatus',
                    link: '/builderkits/onchainkit/fund/fetch-onramp-transaction-status',
                  },
                  {
                    text: 'setupOnrampEventListeners',
                    link: '/builderkits/onchainkit/fund/setup-onramp-event-listeners',
                  },
                ],
              },
              {
                text: 'Identity',
                items: [
                  {
                    text: 'getAddress',
                    link: '/builderkits/onchainkit/identity/get-address',
                  },
                  {
                    text: 'getAttestations',
                    link: '/builderkits/onchainkit/identity/get-attestations',
                  },
                  {
                    text: 'getAvatar',
                    link: '/builderkits/onchainkit/identity/get-avatar',
                  },
                  {
                    text: 'getAvatars',
                    link: '/builderkits/onchainkit/identity/get-avatars',
                  },
                  {
                    text: 'getName',
                    link: '/builderkits/onchainkit/identity/get-name',
                  },
                  {
                    text: 'getNames',
                    link: '/builderkits/onchainkit/identity/get-names',
                  },
                  {
                    text: 'useAddress',
                    link: '/builderkits/onchainkit/identity/use-address',
                  },
                  {
                    text: 'useAvatar',
                    link: '/builderkits/onchainkit/identity/use-avatar',
                  },
                  {
                    text: 'useAvatars',
                    link: '/builderkits/onchainkit/identity/use-avatars',
                  },
                  {
                    text: 'useName',
                    link: '/builderkits/onchainkit/identity/use-name',
                  },
                  {
                    text: 'useNames',
                    link: '/builderkits/onchainkit/identity/use-names',
                  },
                ],
              },
              {
                text: 'Mint',
                items: [
                  {
                    text: 'useTokenDetails',
                    link: '/builderkits/onchainkit/hooks/use-token-details',
                  },
                  {
                    text: 'useMintDetails',
                    link: '/builderkits/onchainkit/hooks/use-mint-details',
                  },
                ],
              },
              {
                text: 'Token',
                items: [
                  {
                    text: 'formatAmount',
                    link: '/builderkits/onchainkit/token/format-amount',
                  },
                ],
              },
              {
                text: 'Wallet',
                items: [
                  {
                    text: 'isValidAAEntrypoint',
                    link: '/builderkits/onchainkit/wallet/is-valid-aa-entrypoint',
                  },
                  {
                    text: 'isWalletACoinbaseSmartWallet',
                    link: '/builderkits/onchainkit/wallet/is-wallet-a-coinbase-smart-wallet',
                  },
                ],
              },
            ],
          },
          {
            text: 'Types',
            collapsed: true,
            items: [
              {
                text: 'API',
                link: '/builderkits/onchainkit/api/types',
              },
              {
                text: 'Appchain',
                link: '/builderkits/onchainkit/appchain/types',
              },
              {
                text: 'Checkout',
                link: '/builderkits/onchainkit/checkout/types',
              },
              {
                text: 'Config',
                link: '/builderkits/onchainkit/config/types',
              },
              {
                text: 'Earn',
                link: '/builderkits/onchainkit/earn/types',
              },
              {
                text: 'Fund',
                link: '/builderkits/onchainkit/fund/types',
              },
              {
                text: 'Identity',
                link: '/builderkits/onchainkit/identity/types',
              },
              {
                text: 'Mint',
                link: '/builderkits/onchainkit/mint/types',
              },
              {
                text: 'Swap',
                link: '/builderkits/onchainkit/swap/types',
              },
              {
                text: 'Token',
                link: '/builderkits/onchainkit/token/types',
              },
              {
                text: 'Transaction',
                link: '/builderkits/onchainkit/transaction/types',
              },
              {
                text: 'Wallet',
                link: '/builderkits/onchainkit/wallet/types',
              },
            ],
          },
          {
            text: 'Contribution',
            collapsed: true,
            items: [
              {
                text: 'How to Contribute',
                link: '/builderkits/onchainkit/guides/contribution',
              },
              {
                text: 'Report a Bug',
                link: '/builderkits/onchainkit/guides/reporting-bug',
              },
            ],
          },
        ],
      },
      {
        text: 'MiniKit',
        collapsed: true,
        items: [
          {
            text: 'Overview',
            link: '/builderkits/minikit/overview',
          },
          {
            text: 'Quickstart',
            link: '/builderkits/minikit/quickstart',
          },
        ],
      },
      {
        text: 'AgentKit (CDP) ↗',
        link: 'https://docs.cdp.coinbase.com/agentkit/docs/welcome',
      },
    ],
  },
  {
    text: 'Blockspace Tools',
    items: [
      {
        text: 'Paymaster (CDP) ↗',
        link: 'https://docs.cdp.coinbase.com/paymaster/docs/welcome',
      },
      {
        text: 'Appchains ↗',
        link: 'https://docs.cdp.coinbase.com/appchains/docs/welcome',
      },
    ],
  },
  {
    text: 'Identity',
    items: [
      {
        text: 'Smart Wallet',
        collapsed: true,
        items: [
          {
            text: 'Introduction',
            items: [
              { text: 'Quickstart', link: '/identity/smart-wallet/quickstart/index' },
              {
                text: 'Recommend Libraries',
                link: '/identity/smart-wallet/introduction/recommended-libraries',
              },
              {
                text: 'Base Gasless Campaign',
                link: '/identity/smart-wallet/introduction/base-gasless-campaign',
              },
            ],
          },

          {
            text: 'Features',
            items: [
              {
                text: 'Built-in Features',
                collapsed: true,
                items: [
                  {
                    text: 'Single Sign On',
                    link: '/identity/smart-wallet/features/single-sign-on',
                  },
                  { text: 'Networks', link: '/identity/smart-wallet/features/networks' },
                  { text: 'Passkeys', link: '/identity/smart-wallet/features/passkeys' },
                  { text: 'Recovery', link: '/identity/smart-wallet/features/recovery-keys' },
                  { text: 'MagicSpend', link: '/identity/smart-wallet/features/MagicSpend' },
                ],
              },
              {
                text: 'Optional Features',
                collapsed: true,
                items: [
                  {
                    text: 'Gas-free Transactions',
                    link: '/identity/smart-wallet/features/gas-free-transactions',
                  },
                  {
                    text: 'Spend Permissions',
                    link: '/identity/smart-wallet/features/spend-permissions',
                  },
                  {
                    text: 'Batch Transactions',
                    link: '/identity/smart-wallet/features/batch-operations',
                  },
                  {
                    text: 'Custom Gas Tokens',
                    link: '/identity/smart-wallet/features/custom-gas-tokens',
                  },
                  {
                    text: 'Sub Accounts',
                    link: '/identity/smart-wallet/features/sub-accounts',
                  },
                ],
              },
            ],
          },
          {
            text: 'Usage Details',
            items: [
              {
                text: 'Signature Verification',
                link: '/identity/smart-wallet/usage-details/signature-verification',
              },
              { text: 'Popups', link: '/identity/smart-wallet/usage-details/popups' },
              { text: 'Simulations', link: '/identity/smart-wallet/usage-details/Simulations' },
              { text: 'Gas Usage', link: '/identity/smart-wallet/usage-details/gas-usage' },
              { text: 'Self Calls', link: '/identity/smart-wallet/usage-details/self-calls' },
            ],
          },
          {
            text: 'SDK',
            items: [
              {
                text: 'Install',
                link: '/identity/smart-wallet/sdk/install',
              },
              {
                text: 'Setup',
                link: '/identity/smart-wallet/sdk/setup',
              },
              {
                text: 'makeWeb3Provider',
                link: '/identity/smart-wallet/sdk/make-web3-provider',
              },
              {
                text: 'Upgrading from 3.x',
                link: '/identity/smart-wallet/sdk/v3-to-v4-changes',
              },
              {
                text: 'CoinbaseWalletProvider',
                collapsed: true,
                items: [
                  {
                    text: 'Overview',
                    link: '/identity/smart-wallet/sdk/coinbasewalletprovider/overview',
                  },
                  {
                    text: 'request',
                    items: [
                      {
                        text: 'Overview',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/overview',
                      },
                      {
                        text: 'eth_accounts',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_accounts',
                      },
                      {
                        text: 'eth_blockNumber',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_blockNumber',
                      },
                      {
                        text: 'eth_chainId',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_chainId',
                      },
                      {
                        text: 'eth_coinbase',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_coinbase',
                      },
                      {
                        text: 'eth_estimateGas',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_estimateGas',
                      },
                      {
                        text: 'eth_feeHistory',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_feeHistory',
                      },
                      {
                        text: 'eth_gasPrice',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_gasPrice',
                      },
                      {
                        text: 'eth_getBalance',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getBalance',
                      },
                      {
                        text: 'eth_getBlockByHash',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getBlockByHash',
                      },
                      {
                        text: 'eth_getBlockByNumber',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getBlockByNumber',
                      },
                      {
                        text: 'eth_getBlockTransactionCountByHash',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getBlockTransactionCountByHash',
                      },
                      {
                        text: 'eth_getBlockTransactionCountByNumber',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getBlockTransactionCountByNumber',
                      },
                      {
                        text: 'eth_getCode',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getCode',
                      },
                      {
                        text: 'eth_getLogs',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getLogs',
                      },
                      {
                        text: 'eth_getProof',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getProof',
                      },
                      {
                        text: 'eth_getStorageAt',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getStorageAt',
                      },
                      {
                        text: 'eth_getTransactionByBlockHashAndIndex',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getTransactionByBlockHashAndIndex',
                      },
                      {
                        text: 'eth_getTransactionByBlockNumberAndIndex',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getTransactionByBlockNumberAndIndex',
                      },
                      {
                        text: 'eth_getTransactionByHash',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getTransactionByHash',
                      },
                      {
                        text: 'eth_getTransactionCount',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getTransactionCount',
                      },
                      {
                        text: 'eth_getTransactionReceipt',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getTransactionReceipt',
                      },
                      {
                        text: 'eth_getUncleCountByBlockHash',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getUncleCountByBlockHash',
                      },
                      {
                        text: 'eth_getUncleCountByBlockNumber',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_getUncleCountByBlockNumber',
                      },
                      {
                        text: 'eth_requestAccounts',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_requestAccounts',
                      },
                      {
                        text: 'eth_sendRawTransaction',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_sendRawTransaction',
                      },
                      {
                        text: 'eth_sendTransaction',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_sendTransaction',
                      },
                      {
                        text: 'eth_signTypedData_v4',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/eth_signTypedData_v4',
                      },
                      {
                        text: 'personal_sign',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/personal_sign',
                      },
                      {
                        text: 'wallet_addEthereumChain',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/wallet_addEthereumChain',
                      },
                      {
                        text: 'wallet_addSubAccount',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/wallet_addSubAccount',
                      },
                      {
                        text: 'wallet_connect',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/wallet_connect',
                      },
                      {
                        text: 'wallet_switchEthereumChain',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/wallet_switchEthereumChain',
                      },
                      {
                        text: 'wallet_watchAsset',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/wallet_watchAsset',
                      },
                      {
                        text: 'web3_clientVersion',
                        link: '/identity/smart-wallet/sdk/coinbasewalletprovider/request/web3_clientVersion',
                      },
                    ],
                  },
                  {
                    text: 'Sub Account Reference',
                    link: '/identity/smart-wallet/sdk/sub-account-reference',
                  },
                ],
              },
            ],
          },
          {
            text: 'Tutorials',
            collapsed: true,
            items: [
              {
                text: 'Update Existing App',
                link: '/identity/smart-wallet/guides/update-existing-app',
              },
              {
                text: 'Signing and Verifying Messages',
                link: '/identity/smart-wallet/guides/signing-and-verifying-messages',
              },
              { text: 'Sign In With Ethereum', link: '/identity/smart-wallet/guides/siwe' },
              { text: 'MagicSpend', link: '/identity/smart-wallet/guides/magic-spend' },
              {
                text: 'Batch Transactions',
                link: '/identity/smart-wallet/guides/batch-transactions',
              },
              { text: 'Paymasters', link: '/identity/smart-wallet/guides/paymasters' },
              { text: 'ERC20 Paymasters', link: '/identity/smart-wallet/guides/erc20-paymasters' },
              {
                text: 'Sub Accounts',
                collapsed: true,
                items: [
                  {
                    text: 'Overview',
                    link: '/identity/smart-wallet/guides/sub-accounts/overview',
                  },
                  {
                    text: 'Setup',
                    link: '/identity/smart-wallet/guides/sub-accounts/setup',
                  },
                  {
                    text: 'Creating Sub Accounts',
                    link: '/identity/smart-wallet/guides/sub-accounts/creating-sub-accounts',
                  },
                  {
                    text: 'Using Sub Accounts',
                    link: '/identity/smart-wallet/guides/sub-accounts/using-sub-accounts',
                  },
                ],
              },
              {
                text: 'Spend Permissions',
                collapsed: true,
                items: [
                  {
                    text: 'Overview',
                    link: '/identity/smart-wallet/guides/spend-permissions/overview',
                  },
                  {
                    text: 'Quickstart',
                    link: '/identity/smart-wallet/guides/spend-permissions/quick-start',
                  },
                  {
                    text: 'API Reference',
                    collapsed: true,
                    items: [
                      {
                        text: 'Client Resources',
                        link: '/identity/smart-wallet/guides/spend-permissions/api-reference/client-resources',
                      },
                      {
                        text: 'Coinbase Fetch Permissions',
                        link: '/identity/smart-wallet/guides/spend-permissions/api-reference/coinbase-fetchpermissions',
                      },
                      {
                        text: 'Spend Permissions Manager',
                        link: '/identity/smart-wallet/guides/spend-permissions/api-reference/spendpermissionmanager',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: 'Basenames',
        collapsed: true,
        items: [
          {
            text: 'Tutorials',
            items: [
              {
                text: 'Basenames Wagmi Tutorial',
                link: '/identity/basenames/basenames-wagmi-tutorial',
              },
              {
                text: 'Basenames OnchainKit Tutorial',
                link: '/identity/basenames/basenames-onchainkit-tutorial',
              },
            ],
          },
          {
            text: 'FAQ & Troubleshooting',
            items: [{ text: 'Basenames FAQ', link: '/identity/basenames/basenames-faq' }],
          },
        ],
      },
      {
        text: 'Verifications (CDP)↗',
        link: 'https://docs.cdp.coinbase.com/verifications/docs/welcome',
      },
    ],
  },
  {
    text: 'Chain',
    items: [
      {
        text: 'General',
        collapsed: true,
        items: [
          { text: 'Why Base?', link: '/chain/why-base' },
          { text: 'Using Base', link: '/chain/using-base' },
          { text: 'Deploy on Base', link: '/chain/deploy-on-base-quickstart' },
          { text: 'Network Information', link: '/chain/network-information' },
          { text: 'Fees', link: '/chain/fees' },
          {
            text: 'Differences Between Ethereum and Base',
            link: '/chain/differences-between-ethereum-and-base',
          },
          { text: 'Run a Base Node', link: '/chain/run-a-base-node' },
          { text: 'Bridge an L1 Token to Base', link: '/chain/bridge-an-l1-token-to-base' },
          { text: 'Adding tokens to Coinbase Wallet', link: '/chain/wallet' },
          {
            text: 'Decentralizing Base with Optimism↗',
            link: 'https://base.mirror.xyz/H_KPwV31M7OJT-THUnU7wYjOF16Sy7aWvaEr5cgHi8I',
          },
        ],
      },
      {
        text: 'Tools',
        collapsed: true,
        items: [
          { text: 'Onchain Registry API', link: '/chain/registry-api' },
          { text: 'Node Providers', link: '/chain/node-providers' },
          { text: 'Block Explorers', link: '/chain/block-explorers' },
          { text: 'Network Faucets', link: '/chain/network-faucets' },
          { text: 'Oracles', link: '/chain/oracles' },
          { text: 'Data Indexers', link: '/chain/data-indexers' },
          { text: 'Cross-chain', link: '/chain/cross-chain' },
          { text: 'Account Abstraction', link: '/chain/account-abstraction' },
          { text: 'Onramps', link: '/chain/onramps' },
        ],
      },
      {
        text: 'Security',
        collapsed: true,
        items: [
          { text: 'Bug Bounty', link: '/chain/security/bounty' },
          { text: 'Report a Vulnerability', link: '/chain/security/report' },
          {
            text: 'How to avoid getting your app flagged as malicious',
            link: '/chain/security/app-blocklist',
          },
        ],
      },
      {
        text: 'Base Contracts',
        link: '/chain/base-contracts',
      },
    ],
  },
  {
    text: 'Use Cases',
    items: [
      {
        text: 'Onboard any user',
        link: '/use-cases/onboard-any-user',
      },
      {
        text: 'Accept crypto payments',
        link: '/use-cases/accept-crypto-payments',
      },
      {
        text: 'Launch AI Agents',
        link: '/use-cases/launch-ai-agents',
      },
      {
        text: 'Decentralize your social app',
        link: '/use-cases/decentralize-social-app',
      },
      {
        text: 'DeFi your app',
        link: '/use-cases/defi-your-app',
      },
      {
        text: 'Go gasless',
        link: '/use-cases/go-gasless',
      },
    ],
  },
  {
    text: 'Cookbook',
    items: [
      {
        text: 'By use case',
        collapsed: true,
        items: [
          {
            text: 'Payments & Commerce',
            collapsed: true,
            items: [
              {
                text: 'Build an E-commerce App',
                link: '/cookbook/use-case-guides/commerce/build-an-ecommerce-app',
              },
              {
                text: 'Deploy a Shopify Storefront',
                link: '/cookbook/use-case-guides/commerce/deploy-a-shopify-storefront',
              },
              { text: 'Transaction Guide', link: '/cookbook/use-case-guides/transactions' },
            ],
          },
          {
            text: 'NFTs & Digital Assets',
            collapsed: true,
            items: [
              {
                text: 'NFT Minting with Zora',
                link: '/cookbook/use-case-guides/creator/nft-minting-with-zora',
              },
              { text: 'Simple Onchain NFTs', link: '/cookbook/nfts/simple-onchain-nfts' },
              { text: 'Dynamic NFTs', link: '/cookbook/nfts/dynamic-nfts' },
              { text: 'Complex Onchain NFTs', link: '/cookbook/nfts/complex-onchain-nfts' },
              { text: 'Signature Mint', link: '/cookbook/nfts/signature-mint' },
              {
                text: 'ThirdWeb Unreal NFT Items',
                link: '/cookbook/nfts/thirdweb-unreal-nft-items',
              },
            ],
          },
          {
            text: 'Social',
            collapsed: true,
            items: [
              {
                text: 'Farcaster No-Code NFT Minting',
                link: '/cookbook/use-case-guides/no-code-minting',
              },
              {
                text: 'Farcaster NFT Minting Guide',
                link: '/cookbook/use-case-guides/nft-minting',
              },
              {
                text: 'Convert Farcaster Frame to Open Frame',
                link: '/cookbook/use-case-guides/creator/convert-farcaster-frame-to-open-frame',
              },
            ],
          },
          {
            text: 'DeFi & Financial Tools',
            collapsed: true,
            items: [
              {
                text: 'Add In-App Funding (Onramp)',
                link: '/cookbook/use-case-guides/finance/build-a-smart-wallet-funding-app',
              },
              {
                text: 'Access Real-World Data (Chainlink)',
                link: '/cookbook/use-case-guides/finance/access-real-world-data-chainlink',
              },
              {
                text: 'Access Real-Time Asset Data (Pyth)',
                link: '/cookbook/use-case-guides/finance/access-real-time-asset-data-pyth-price-feeds',
              },
            ],
          },
          {
            text: 'Growth & Distribution',
            collapsed: true,
            items: [
              { text: 'Cast Actions', link: '/cookbook/use-case-guides/cast-actions' },
              { text: 'Hyperframes', link: '/cookbook/use-case-guides/hyperframes' },
              { text: 'Deploy to Vercel', link: '/cookbook/use-case-guides/deploy-to-vercel' },
              {
                text: 'Gating and Redirects',
                link: '/cookbook/use-case-guides/gating-and-redirects',
              },
              { text: 'Email Campaigns', link: '/cookbook/use-case-guides/create-email-campaigns' },
              { text: 'Retaining Users', link: '/cookbook/use-case-guides/retaining-users' },
            ],
          },
        ],
      },
      {
        text: 'By tool',
        collapsed: true,
        items: [
          {
            text: 'Smart Contract Development',
            collapsed: true,
            items: [
              {
                text: 'Hardhat',
                items: [
                  {
                    text: 'Deploy with Hardhat',
                    link: '/cookbook/smart-contract-development/hardhat/deploy-with-hardhat',
                  },
                  {
                    text: 'Debugging Smart Contracts',
                    link: '/cookbook/smart-contract-development/hardhat/debugging-smart-contracts',
                  },
                  {
                    text: 'Optimizing Gas Usage',
                    link: '/cookbook/smart-contract-development/hardhat/optimizing-gas-usage',
                  },
                  {
                    text: 'Reducing Contract Size',
                    link: '/cookbook/smart-contract-development/hardhat/reducing-contract-size',
                  },
                  {
                    text: 'Analyzing Test Coverage',
                    link: '/cookbook/smart-contract-development/hardhat/analyzing-test-coverage',
                  },
                ],
              },
              {
                text: 'Foundry',
                items: [
                  {
                    text: 'Deploy with Foundry',
                    link: '/cookbook/smart-contract-development/foundry/deploy-with-foundry',
                  },
                  {
                    text: 'Setup with Base',
                    link: '/cookbook/smart-contract-development/foundry/setup-with-base',
                  },
                  {
                    text: 'Testing Smart Contracts',
                    link: '/cookbook/smart-contract-development/foundry/testing-smart-contracts',
                  },
                  {
                    text: 'Verify Contract with Basescan',
                    link: '/cookbook/smart-contract-development/foundry/verify-contract-with-basescan',
                  },
                  {
                    text: 'Generate Random Numbers',
                    link: '/cookbook/smart-contract-development/foundry/generate-random-numbers-contracts',
                  },
                ],
              },
              {
                text: 'Remix',
                items: [
                  {
                    text: 'Deploy with Remix',
                    link: '/cookbook/smart-contract-development/remix/deploy-with-remix',
                  },
                ],
              },
              {
                text: 'Tenderly',
                items: [
                  {
                    text: 'Deploy with Tenderly',
                    link: '/cookbook/smart-contract-development/tenderly/deploy-with-tenderly',
                  },
                ],
              },
              {
                text: 'ThirdWeb',
                items: [
                  {
                    text: 'Deploy with ThirdWeb',
                    link: '/cookbook/smart-contract-development/thirdweb/deploy-with-thirdweb',
                  },
                  {
                    text: 'Build with ThirdWeb',
                    link: '/cookbook/smart-contract-development/thirdweb/build-with-thirdweb',
                  },
                  {
                    text: 'ThirdWeb SDK',
                    link: '/cookbook/smart-contract-development/thirdweb/thirdweb-sdk',
                  },
                  {
                    text: 'ThirdWeb CLI',
                    link: '/cookbook/smart-contract-development/thirdweb/thirdweb-cli',
                  },
                ],
              },
            ],
          },
          {
            text: 'IPFS',
            items: [{ text: 'Deploy with Fleek', link: '/cookbook/ipfs/deploy-with-fleek' }],
          },
          {
            text: 'Token Gating',
            items: [
              {
                text: 'Gate IRL Events with Nouns',
                link: '/cookbook/token-gating/gate-irl-events-with-nouns',
              },
            ],
          },
          {
            text: 'Client-Side Development',
            items: [
              {
                text: 'Introduction to Providers',
                link: '/cookbook/client-side-development/introduction-to-providers',
              },
            ],
          },
          {
            text: 'Account Abstraction',
            items: [
              {
                text: 'Using Biconomy',
                link: '/cookbook/account-abstraction/account-abstraction-on-base-using-biconomy',
              },
              {
                text: 'Using Particle Network',
                link: '/cookbook/account-abstraction/account-abstraction-on-base-using-particle-network',
              },
              {
                text: 'Using Privy and Base Paymaster',
                link: '/cookbook/account-abstraction/account-abstraction-on-base-using-privy-and-the-base-paymaster',
              },
              {
                text: 'Gasless Transactions with Paymaster',
                link: '/cookbook/account-abstraction/gasless-transactions-with-paymaster',
              },
            ],
          },
          {
            text: 'Cross-Chain',
            items: [
              {
                text: 'Bridge Tokens with LayerZero',
                link: '/cookbook/cross-chain/bridge-tokens-with-layerzero',
              },
              {
                text: 'Send Messages and Tokens from Base (Chainlink)',
                link: '/cookbook/cross-chain/send-messages-and-tokens-from-base-chainlink',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: 'Learn',
    collapsed: true,
    items: [
      {
        text: 'Welcome',
        link: '/learn/welcome',
      },
      {
        text: 'Introduction to Ethereum',
        collapsed: true,
        items: [
          {
            text: 'Intro to Ethereum',
            link: '/learn/introduction-to-ethereum/intro-to-ethereum-vid',
          },
          {
            text: 'Ethereum Dev Overview',
            link: '/learn/introduction-to-ethereum/ethereum-dev-overview-vid',
          },
          {
            text: 'Ethereum Applications',
            link: '/learn/introduction-to-ethereum/ethereum-applications',
          },
          {
            text: 'Gas Use in ETH Transactions',
            link: '/learn/introduction-to-ethereum/gas-use-in-eth-transactions',
          },
          { text: 'EVM Diagram', link: '/learn/introduction-to-ethereum/evm-diagram' },
          {
            text: 'Guide to Base ↗',
            link: 'https://www.coinbase.com/cloud/discover/protocol-guides/guide-to-base',
          },
        ],
      },
      {
        text: 'Development Tools',
        collapsed: true,
        items: [{ text: 'Overview', link: '/learn/development-tools/overview' }],
      },
      {
        text: 'Development with Hardhat',
        collapsed: true,
        items: [
          {
            text: 'Hardhat Setup and Overview',
            items: [
              {
                text: 'Hardhat Overview',
                link: '/learn/hardhat-setup-overview/hardhat-overview-vid',
              },
              {
                text: 'Creating a Project',
                link: '/learn/hardhat-setup-overview/creating-a-project-vid',
              },
              {
                text: 'Setup Overview',
                link: '/learn/hardhat-setup-overview/hardhat-setup-overview-sbs',
              },
            ],
          },
          {
            text: 'Testing with Typescript',
            items: [
              { text: 'Testing Overview', link: '/learn/hardhat-testing/testing-overview-vid' },
              { text: 'Writing Tests', link: '/learn/hardhat-testing/writing-tests-vid' },
              {
                text: 'Contract ABI and Testing',
                link: '/learn/hardhat-testing/contract-abi-and-testing-vid',
              },
              { text: 'Testing Step by Step', link: '/learn/hardhat-testing/hardhat-testing-sbs' },
            ],
          },
          {
            text: 'Etherscan',
            items: [
              { text: 'Step by Step Guide', link: '/learn/etherscan/etherscan-sbs' },
              { text: 'Video Tutorial', link: '/learn/etherscan/etherscan-vid' },
            ],
          },
          {
            text: 'Deploying Smart Contracts',
            items: [
              {
                text: 'Installing Hardhat Deploy',
                link: '/learn/hardhat-deploy/installing-hardhat-deploy-vid',
              },
              {
                text: 'Setup Deploy Script',
                link: '/learn/hardhat-deploy/setup-deploy-script-vid',
              },
              {
                text: 'Testing Deployment',
                link: '/learn/hardhat-deploy/testing-our-deployment-vid',
              },
              {
                text: 'Network Configuration',
                link: '/learn/hardhat-deploy/test-network-configuration-vid',
              },
              { text: 'Deployment', link: '/learn/hardhat-deploy/deployment-vid' },
              { text: 'Step by Step Guide', link: '/learn/hardhat-deploy/hardhat-deploy-sbs' },
            ],
          },
          {
            text: 'Verifying Smart Contracts',
            items: [
              { text: 'Video Tutorial', link: '/learn/hardhat-verify/hardhat-verify-vid' },
              { text: 'Step by Step Guide', link: '/learn/hardhat-verify/hardhat-verify-sbs' },
            ],
          },
          {
            text: 'Mainnet Forking',
            items: [
              { text: 'Video Tutorial', link: '/learn/hardhat-forking/mainnet-forking-vid' },
              { text: 'Step by Step Guide', link: '/learn/hardhat-forking/hardhat-forking' },
            ],
          },
        ],
      },
      {
        text: 'Development With Foundry',
        collapsed: true,
        items: [
          {
            text: 'Introduction to Foundry ↗',
            link: 'https://docs.base.org/tutorials/intro-to-foundry-setup',
          },
          {
            text: 'Testing Smart Contracts ↗',
            link: 'https://docs.base.org/tutorials/intro-to-foundry-testing',
          },
        ],
      },
      {
        text: 'Smart Contract Development',
        collapsed: true,
        items: [
          {
            text: 'Introduction to Solidity',
            link: '/learn/introduction-to-solidity/introduction-to-solidity-overview',
          },
          {
            text: 'Anatomy of a Smart Contract',
            link: '/learn/introduction-to-solidity/anatomy-of-a-smart-contract-vid',
          },
          {
            text: 'Introduction to Solidity',
            items: [
              {
                text: 'Video Tutorial',
                link: '/learn/introduction-to-solidity/introduction-to-solidity-vid',
              },
              { text: 'Overview', link: '/learn/introduction-to-solidity/solidity-overview' },
              {
                text: 'Introduction to Remix',
                link: '/learn/introduction-to-solidity/introduction-to-remix-vid',
              },
              {
                text: 'Remix Guide',
                link: '/learn/introduction-to-solidity/introduction-to-remix',
              },
              {
                text: 'Deployment in Remix',
                link: '/learn/introduction-to-solidity/deployment-in-remix-vid',
              },
              {
                text: 'Step by Step Guide',
                link: '/learn/introduction-to-solidity/deployment-in-remix',
              },
            ],
          },
          {
            text: 'Contracts and Basic Functions',
            items: [
              {
                text: 'Introduction to Contracts',
                link: '/learn/contracts-and-basic-functions/intro-to-contracts-vid',
              },
              {
                text: 'Hello World Guide',
                link: '/learn/contracts-and-basic-functions/hello-world-step-by-step',
              },
              { text: 'Basic Types', link: '/learn/contracts-and-basic-functions/basic-types' },
              {
                text: 'Exercise',
                link: '/learn/contracts-and-basic-functions/basic-functions-exercise',
              },
            ],
          },
          {
            text: 'Deploying to a Testnet',
            items: [
              {
                text: 'Overview of Test Networks',
                link: '/learn/deployment-to-testnet/overview-of-test-networks-vid',
              },
              { text: 'Test Networks', link: '/learn/deployment-to-testnet/test-networks' },
              {
                text: 'Deploy to Base Sepolia',
                link: '/learn/deployment-to-testnet/deployment-to-base-sepolia-sbs',
              },
              {
                text: 'Contract Verification',
                link: '/learn/deployment-to-testnet/contract-verification-sbs',
              },
              {
                text: 'Exercise',
                link: '/learn/deployment-to-testnet/deployment-to-testnet-exercise',
              },
            ],
          },
          {
            text: 'Control Structures',
            items: [
              {
                text: 'Standard Control Structures',
                link: '/learn/control-structures/standard-control-structures-vid',
              },
              { text: 'Loops', link: '/learn/control-structures/loops-vid' },
              {
                text: 'Require, Revert, Error',
                link: '/learn/control-structures/require-revert-error-vid',
              },
              { text: 'Overview', link: '/learn/control-structures/control-structures' },
              { text: 'Exercise', link: '/learn/control-structures/control-structures-exercise' },
            ],
          },
          {
            text: 'Storage in Solidity',
            items: [
              { text: 'Simple Storage', link: '/learn/storage/simple-storage-video' },
              { text: 'Step by Step Guide', link: '/learn/storage/simple-storage-sbs' },
              { text: 'How Storage Works', link: '/learn/storage/how-storage-works-video' },
              { text: 'Storage Overview', link: '/learn/storage/how-storage-works' },
              { text: 'Exercise', link: '/learn/storage/storage-exercise' },
            ],
          },
          {
            text: 'Arrays in Solidity',
            items: [
              { text: 'Arrays Overview', link: '/learn/arrays/arrays-in-solidity-vid' },
              { text: 'Writing Arrays', link: '/learn/arrays/writing-arrays-in-solidity-vid' },
              { text: 'Arrays Guide', link: '/learn/arrays/arrays-in-solidity' },
              { text: 'Filtering Arrays', link: '/learn/arrays/filtering-an-array-sbs' },
              { text: 'Fixed Size Arrays', link: '/learn/arrays/fixed-size-arrays-vid' },
              { text: 'Array Storage Layout', link: '/learn/arrays/array-storage-layout-vid' },
              { text: 'Exercise', link: '/learn/arrays/arrays-exercise' },
            ],
          },
          {
            text: 'The Mapping Type',
            items: [
              { text: 'Mappings Overview', link: '/learn/mappings/mappings-vid' },
              { text: 'Using msg.sender', link: '/learn/mappings/using-msg-sender-vid' },
              { text: 'Step by Step Guide', link: '/learn/mappings/mappings-sbs' },
              {
                text: 'How Mappings are Stored',
                link: '/learn/mappings/how-mappings-are-stored-vid',
              },
              { text: 'Exercise', link: '/learn/mappings/mappings-exercise' },
            ],
          },
          {
            text: 'Advanced Functions',
            items: [
              {
                text: 'Function Visibility',
                link: '/learn/advanced-functions/function-visibility-vid',
              },
              {
                text: 'Visibility Overview',
                link: '/learn/advanced-functions/function-visibility',
              },
              {
                text: 'Function Modifiers',
                link: '/learn/advanced-functions/function-modifiers-vid',
              },
              { text: 'Modifiers Guide', link: '/learn/advanced-functions/function-modifiers' },
            ],
          },
          {
            text: 'Structs',
            items: [
              { text: 'Structs Overview', link: '/learn/structs/structs-vid' },
              { text: 'Step by Step Guide', link: '/learn/structs/structs-sbs' },
              { text: 'Exercise', link: '/learn/structs/structs-exercise' },
            ],
          },
          {
            text: 'Inheritance',
            items: [
              { text: 'Inheritance Overview', link: '/learn/inheritance/inheritance-vid' },
              { text: 'Step by Step Guide', link: '/learn/inheritance/inheritance-sbs' },
              { text: 'Multiple Inheritance', link: '/learn/inheritance/multiple-inheritance-vid' },
              {
                text: 'Multiple Inheritance Guide',
                link: '/learn/inheritance/multiple-inheritance',
              },
              { text: 'Abstract Contracts', link: '/learn/inheritance/abstract-contracts-vid' },
              {
                text: 'Abstract Contracts Guide',
                link: '/learn/inheritance/abstract-contracts-sbs',
              },
              { text: 'Exercise', link: '/learn/inheritance/inheritance-exercise' },
            ],
          },
          {
            text: 'Imports',
            items: [
              { text: 'Imports Overview', link: '/learn/imports/imports-vid' },
              { text: 'Step by Step Guide', link: '/learn/imports/imports-sbs' },
              { text: 'Exercise', link: '/learn/imports/imports-exercise' },
            ],
          },
          {
            text: 'Errors',
            items: [
              { text: 'Error Triage', link: '/learn/error-triage/error-triage-vid' },
              { text: 'Error Guide', link: '/learn/error-triage/error-triage' },
              { text: 'Exercise', link: '/learn/error-triage/error-triage-exercise' },
            ],
          },
          {
            text: 'The new Keyword',
            items: [
              {
                text: 'Creating New Contracts',
                link: '/learn/new-keyword/creating-a-new-contract-vid',
              },
              { text: 'Step by Step Guide', link: '/learn/new-keyword/new-keyword-sbs' },
              { text: 'Exercise', link: '/learn/new-keyword/new-keyword-exercise' },
            ],
          },
          {
            text: 'Contract to Contract Interactions',
            items: [
              { text: 'Intro to Interfaces', link: '/learn/interfaces/intro-to-interfaces-vid' },
              {
                text: 'Calling Another Contract',
                link: '/learn/interfaces/calling-another-contract-vid',
              },
              {
                text: 'Testing the Interface',
                link: '/learn/interfaces/testing-the-interface-vid',
              },
              {
                text: 'Step by Step Guide',
                link: '/learn/interfaces/contract-to-contract-interaction',
              },
            ],
          },
          {
            text: 'Events',
            items: [{ text: 'Step by Step Guide', link: '/learn/events/hardhat-events-sbs' }],
          },
          {
            text: 'Address and Payable',
            items: [{ text: 'Guide', link: '/learn/address-and-payable/address-and-payable' }],
          },
        ],
      },
      {
        text: 'Token Development',
        collapsed: true,
        items: [
          {
            text: 'Introduction to Tokens',
            items: [
              { text: 'Tokens Overview', link: '/learn/intro-to-tokens/intro-to-tokens-vid' },
              {
                text: 'Common Misconceptions',
                link: '/learn/intro-to-tokens/misconceptions-about-tokens-vid',
              },
              { text: 'Overview Guide', link: '/learn/intro-to-tokens/tokens-overview' },
            ],
          },
          {
            text: 'Minimal Tokens',
            items: [
              {
                text: 'Creating a Minimal Token',
                link: '/learn/minimal-tokens/creating-a-minimal-token-vid',
              },
              {
                text: 'Transferring Tokens',
                link: '/learn/minimal-tokens/transferring-a-minimal-token-vid',
              },
              { text: 'Step by Step Guide', link: '/learn/minimal-tokens/minimal-token-sbs' },
              { text: 'Exercise', link: '/learn/minimal-tokens/minimal-tokens-exercise' },
            ],
          },
          {
            text: 'ERC-20 Tokens',
            items: [
              { text: 'Analyzing ERC-20', link: '/learn/erc-20-token/analyzing-erc-20-vid' },
              { text: 'ERC-20 Standard', link: '/learn/erc-20-token/erc-20-standard' },
              { text: 'OpenZeppelin ERC-20', link: '/learn/erc-20-token/openzeppelin-erc-20-vid' },
              { text: 'Testing ERC-20', link: '/learn/erc-20-token/erc-20-testing-vid' },
              { text: 'Step by Step Guide', link: '/learn/erc-20-token/erc-20-token-sbs' },
              { text: 'Exercise', link: '/learn/erc-20-token/erc-20-exercise' },
            ],
          },
          {
            text: 'ERC-721 Tokens',
            items: [
              { text: 'ERC-721 Standard', link: '/learn/erc-721-token/erc-721-standard-video' },
              { text: 'Standard Overview', link: '/learn/erc-721-token/erc-721-standard' },
              { text: 'OpenSea Integration', link: '/learn/erc-721-token/erc-721-on-opensea-vid' },
              {
                text: 'OpenZeppelin ERC-721',
                link: '/learn/erc-721-token/openzeppelin-erc-721-vid',
              },
              {
                text: 'Implementation Guide',
                link: '/learn/erc-721-token/implementing-an-erc-721-vid',
              },
              { text: 'Step by Step Guide', link: '/learn/erc-721-token/erc-721-sbs' },
              { text: 'Exercise', link: '/learn/erc-721-token/erc-721-exercise' },
            ],
          },
        ],
      },
      {
        text: 'Hardhat Tools and Testing',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/learn/hardhat-tools-and-testing/overview' },
          {
            text: 'Profiling Gas ↗',
            link: 'https://docs.base.org/tutorials/hardhat-profiling-gas',
          },
          {
            text: 'Profiling Size ↗',
            link: 'https://docs.base.org/tutorials/hardhat-profiling-size',
          },
          { text: 'Debugging ↗', link: 'https://docs.base.org/tutorials/hardhat-debugging' },
          {
            text: 'Test Coverage ↗',
            link: 'https://docs.base.org/tutorials/hardhat-test-coverage',
          },
        ],
      },
      {
        text: 'Onchain App Development',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/learn/frontend-setup/overview' },
          {
            text: 'Frontend Setup',
            items: [
              { text: 'Wallet Connectors', link: '/learn/frontend-setup/wallet-connectors' },
              {
                text: 'Building an Onchain App',
                link: '/learn/frontend-setup/building-an-onchain-app',
              },
            ],
          },
          {
            text: 'Connecting to the Blockchain ↗',
            link: 'https://docs.base.org/tutorials/intro-to-providers',
          },
          {
            text: 'Reading and Displaying Data',
            items: [
              { text: 'useAccount', link: '/learn/reading-and-displaying-data/useAccount' },
              {
                text: 'useReadContract',
                link: '/learn/reading-and-displaying-data/useReadContract',
              },
              {
                text: 'Configuring useReadContract',
                link: '/learn/reading-and-displaying-data/configuring-useReadContract',
              },
            ],
          },
          {
            text: 'Writing to Contracts',
            items: [
              { text: 'useWriteContract', link: '/learn/writing-to-contracts/useWriteContract' },
              {
                text: 'useSimulateContract',
                link: '/learn/writing-to-contracts/useSimulateContract',
              },
            ],
          },
        ],
      },
      {
        text: 'Exercise Contracts',
        link: '/learn/exercise-contracts',
      },
      {
        text: 'Get help↗',
        link: 'https://discord.com/invite/buildonbase',
      },
    ],
  },
  {
    text: 'Buildathons',
    collapsed: true,
    items: [{ text: '2025-02-flash', link: '/buildathons/2025-02-flash' }],
  },
  {
    text: 'Feedback',
    items: [
      {
        text: 'Get help ↗',
        link: 'https://discord.com/invite/buildonbase',
      },
      {
        text: 'Bug bounty ↗',
        link: 'https://hackerone.com/coinbase',
      },
    ],
  },
];
`
export const findGuideParamsPrompt = `
    This is the path to the technical documentation to create actions from.
    To get the steps list, you need to pass the guideLink to the getStepsList tool.
    From the user prompt, find the most relevant guide from the sidebar of the docs website.
    The sidebar list can be found here:
    ${sidebar}
    Find the path of the guide in the sidebar and pass it as guideLink by adding https://docs.base.org to the getStepsList tool.
  
    For example, if the user wants to create a sign and verify component, the guideLink should be https://docs.base.org/identity/smart-wallet/guides/signing-and-verifying-messages
  
    You will find that in the sidebar list, the guide is under the "Smart Wallet" section.
    `;

export const testingPrompt = (code: string) => {
  return `
  Here are some good examples of wagmi config files:
  ${wagmiConfigExample1}
  ${wagmiConfigExample2}

  Here are some good examples of sign and verify components:
  ${signAndVerifyComponentExample}
  ${signAndVerifyComponentExample2}

  I gave another LLM a task to create a wagmi config file and a sign and verify component.
  Here is the code they created:
  ${code}

  Please look at the code examples and score the code from 0 to 10 on the following criteria:
  - Is the code a good example of a wagmi config file?
  - Is the code a good example of a sign and verify component?
  - Is the code easy to understand?
  - Is the code easy to maintain?
  - Is the code easy to test?
  - Is the code easy to deploy?
  `;
};

const wagmiConfigExample1 = `
import { http, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";

export const cbWalletConnector = coinbaseWallet({
  appName: "Wagmi Smart Wallet",
  preference: "smartWalletOnly",
});

export const config = createConfig({
  chains: [baseSepolia],
  // turn off injected provider discovery
  multiInjectedProviderDiscovery: false,
  connectors: [cbWalletConnector],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});
`;

const wagmiConfigExample2 = `
'use client';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  coinbaseWallet,
  metaMaskWallet,
  rainbowWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { useMemo } from 'react';
import { http, createConfig } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import { NEXT_PUBLIC_WC_PROJECT_ID } from './config';

export function useWagmiConfig() {
  const projectId = NEXT_PUBLIC_WC_PROJECT_ID ?? '';
  if (!projectId) {
    const providerErrMessage =
      'To connect to all Wallets you need to provide a NEXT_PUBLIC_WC_PROJECT_ID env variable';
    throw new Error(providerErrMessage);
  }

  return useMemo(() => {
    const connectors = connectorsForWallets(
      [
        {
          groupName: 'Recommended Wallet',
          wallets: [coinbaseWallet],
        },
        {
          groupName: 'Other Wallets',
          wallets: [rainbowWallet, metaMaskWallet],
        },
      ],
      {
        appName: 'onchainkit',
        projectId,
      },
    );

    const wagmiConfig = createConfig({
      chains: [base, baseSepolia],
      // turn off injected provider discovery
      multiInjectedProviderDiscovery: false,
      connectors,
      ssr: true,
      transports: {
        [base.id]: http(),
        [baseSepolia.id]: http(),
      },
    });

    return wagmiConfig;
  }, [projectId]);
}
`;

const signAndVerifyComponentExample = `
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Hex } from "viem";
import { useAccount, usePublicClient, useSignMessage } from "wagmi";
import { SiweMessage } from "siwe";

export function SignMessage() {
  const account = useAccount();
  const client = usePublicClient();
  const [signature, setSignature] = useState<Hex | undefined>(undefined);
  const { signMessage } = useSignMessage({
    mutation: { onSuccess: (sig) => setSignature(sig) },
  });
  const message = useMemo(() => {
    return new SiweMessage({
      domain: document.location.host,
      address: account.address,
      chainId: account.chainId,
      uri: document.location.origin,
      version: "1",
      statement: "Smart Wallet SIWE Example",
      nonce: "12345678",
    });
  }, []);

  const [valid, setValid] = useState<boolean | undefined>(undefined);

  const checkValid = useCallback(async () => {
    if (!signature || !account.address || !client) return;

    client
      .verifyMessage({
        address: account.address,
        message: message.prepareMessage(),
        signature,
      })
      .then((v) => setValid(v));
  }, [signature, account]);

  useEffect(() => {
    checkValid();
  }, [signature, account]);

  return (
    <div>
      <h2>Sign Message (Sign In with Ethereum)</h2>
      <button
        onClick={() => signMessage({ message: message.prepareMessage() })}
      >
        Sign
      </button>
      <p>{}</p>
      {signature && <p>Signature: {signature}</p>}
      {valid != undefined && <p> Is valid: {valid.toString()} </p>}
    </div>
  );
}
`;

const signAndVerifyComponentExample2 = `
import { useCallback, useEffect, useState } from "react";
import type { Hex } from "viem";
import { useAccount, useConnect, usePublicClient, useSignMessage } from "wagmi";
import { SiweMessage } from "siwe";
import { cbWalletConnector } from "@/wagmi";

export function ConnectAndSIWE() {
  const { connect } = useConnect({
    mutation: {
      onSuccess: (data) => {
        const address = data.accounts[0];
        const chainId = data.chainId;
        const m = new SiweMessage({
          domain: document.location.host,
          address,
          chainId,
          uri: document.location.origin,
          version: "1",
          statement: "Smart Wallet SIWE Example",
          nonce: "12345678",
        });
        setMessage(m);
        signMessage({ message: m.prepareMessage() });
      },
    },
  });
  const account = useAccount();
  const client = usePublicClient();
  const [signature, setSignature] = useState<Hex | undefined>(undefined);
  const { signMessage } = useSignMessage({
    mutation: { onSuccess: (sig) => setSignature(sig) },
  });
  const [message, setMessage] = useState<SiweMessage | undefined>(undefined);

  const [valid, setValid] = useState<boolean | undefined>(undefined);

  const checkValid = useCallback(async () => {
    if (!signature || !account.address || !client || !message) return;

    client
      .verifyMessage({
        address: account.address,
        message: message.prepareMessage(),
        signature,
      })
      .then((v) => setValid(v));
  }, [signature, account]);

  useEffect(() => {
    checkValid();
  }, [signature, account]);

  useEffect(() => {});

  return (
    <div>
      <button onClick={() => connect({ connector: cbWalletConnector })}>
        Connect + SIWE
      </button>
      <p>{}</p>
      {valid != undefined && <p> Is valid: {valid.toString()} </p>}
    </div>
  );
}
`;
