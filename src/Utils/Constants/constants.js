const Frequency = [
    {value:"monthly", alias: "Monthly"},
    {value:"quarterly", alias: "Quarterly"},
    {value:"half-yearly", alias: "Half yearly"},
    {value:"annual", alias: "Annual"},
];

const Categories = [
    {
      name: 'Housing',
      subcategories: [
        {
          alias: 'Rent or mortgage payments',
          value: 'Rent or mortgage payments',
        },
        { alias: 'Property taxes', value: 'Property taxes' },
        { alias: 'Home insurance', value: 'Home insurance' },
      ],
    },
    {
      name: 'Utilities',
      subcategories: [
        { alias: 'Electricity', value: 'Electricity' },
        { alias: 'Water', value: 'Water' },
        { alias: 'Gas', value: 'Gas' },
        { alias: 'Internet', value: 'Internet' },
      ],
    },
    {
      name: 'Transportation',
      subcategories: [
        { alias: 'Fuel', value: 'Fuel' },
        {
          alias: 'Public transportation fares',
          value: 'Public transportation fares',
        },
        { alias: 'Vehicle maintenance', value: 'Vehicle maintenance' },
      ],
    },
    {
      name: 'Groceries',
      subcategories: [
        {
          alias: 'Food purchases for home consumption',
          value: 'Food purchases for home consumption',
        },
      ],
    },
    {
      name: 'Dining Out',
      subcategories: [
        { alias: 'Restaurants', value: 'Restaurants' },
        { alias: 'Fast food', value: 'Fast food' },
        { alias: 'Cafes', value: 'Cafes' },
      ],
    },
    {
      name: 'Entertainment',
      subcategories: [
        { alias: 'Movies', value: 'Movies' },
        { alias: 'Concerts', value: 'Concerts' },
        { alias: 'Sporting events', value: 'Sporting events' },
        {
          alias: 'Subscriptions (e.g., streaming services)',
          value: 'Subscriptions (e.g., streaming services)',
        },
      ],
    },
    {
      name: 'Healthcare',
      subcategories: [
        {
          alias: 'Health insurance premiums',
          value: 'Health insurance premiums',
        },
        { alias: 'Medical expenses', value: 'Medical expenses' },
        { alias: 'Prescription medications', value: 'Prescription medications' },
      ],
    },
    {
      name: 'Personal Care',
      subcategories: [
        { alias: 'Toiletries', value: 'Toiletries' },
        { alias: 'Haircuts', value: 'Haircuts' },
        { alias: 'Beauty products', value: 'Beauty products' },
      ],
    },
    {
      name: 'Debt Repayment',
      subcategories: [
        { alias: 'Credit card payments', value: 'Credit card payments' },
        { alias: 'Loan repayments', value: 'Loan repayments' },
      ],
    },
    {
      name: 'Savings',
      subcategories: [
        { alias: 'Emergency fund', value: 'Emergency fund' },
        { alias: 'Retirement savings', value: 'Retirement savings' },
        { alias: 'Education fund', value: 'Education fund' },
      ],
    },
    {
      name: 'Miscellaneous',
      subcategories: [
        {
          alias: 'others',
          value: 'Others',
        },
      ],
    },
  ];

const cosntants = {
    Frequency,
    Categories,
};  
export default cosntants