import {
    BarChart, Bar,
    LineChart, Line,
    PieChart, Pie, Cell,
    AreaChart, Area,
    XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
  } from 'recharts';
  import { motion } from 'framer-motion';
  
  const data = [
    { name: 'Jan', users: 400 },
    { name: 'Feb', users: 300 },
    { name: 'Mar', users: 500 },
    { name: 'Apr', users: 200 },
  ];
  
  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const color = "#EF2346";
  
  const chartVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 20 }
    }
  };
  
  const DashboardCharts = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {/* Bar Chart */}
        <motion.div
          variants={chartVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-4 rounded-xl shadow"
        >
          <h2 className="text-lg font-semibold text-[#EF2346] mb-2">Bar Chart</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill={color} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
  
        {/* Line Chart */}
        <motion.div
          variants={chartVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-4 rounded-xl shadow"
        >
          <h2 className="text-lg font-semibold text-[#EF2346] mb-2">Line Chart</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke={color} strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
  
        {/* Pie Chart */}
        <motion.div
          variants={chartVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-4 rounded-xl shadow"
        >
          <h2 className="text-lg font-semibold text-[#EF2346] mb-2">Pie Chart</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Tooltip />
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill={color}
                dataKey="value"
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
  
        {/* Area Chart */}
        <motion.div
          variants={chartVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-4 rounded-xl shadow"
        >
          <h2 className="text-lg font-semibold text-[#EF2346] mb-2">Area Chart</h2>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="users"
                stroke={color}
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    );
  };
  
  export default DashboardCharts;
  