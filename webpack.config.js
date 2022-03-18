import path from 'path';
import { cwd } from 'process';
import HtmlWebpackPlugin from 'html-webpack-plugin';

/** @type { import('webpack').Configuration } */
export default {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(cwd(), 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		compress: true,
		port: 9000,
		open: true,
		proxy: {
			'/api': {
				target: 'https://api.football-data.org/v2',
				secure: false,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			},
		}
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