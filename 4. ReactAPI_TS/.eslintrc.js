module.exports = {
    root: true,
    extends: [
        'airbnb',
        'airbnb-typescript', // typescript 사용 시
        'airbnb/hooks', // react 사용 시
        // 여기서부터 prettier를 적용하고 싶다면 활성화
        'plugin:prettier/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
        'import/parser': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    rules: {
        'import/no-unresolved': 'error',
        // indent: ['error', 4], 프리티어와 충돌 나는 부분이 있고 프리티어가 대체가능한 부분임.
        indent: 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-underscore-dangle': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
                leadingUnderscore: 'allow',
            },
        ],
        '@typescript-eslint/no-loop-func': 'off',
    },
};
