import path from 'path';
import { cwd } from 'process';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(cwd(), 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		compress: true,
		port: 9000
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'assets': path.resolve(cwd(), 'assets')
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	}
};