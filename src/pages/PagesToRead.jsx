import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';





const PagesToRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',];
    const data = [
        {
            name: 'The Great Gatsby',
            totalPages: 218,
        },

        {
            name: 'To Kill a Mockingbird',
            totalPages: 281,

        },
        {
            name: "Pride and Prejudice",
            totalPages: 279,
        },

        {
            name: 'The Hobbit',
            totalPages: 310,

        },

    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='bg-[#1313130d] flex fles-col justify-center items-center'>

            <BarChart
                width={800}
                height={600}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>

        </div>
    );
};

export default PagesToRead;