type AlertType = 'error' | 'info' | 'success' | 'warning'

interface Product {
	id: number
	price: number
	name: string
}

interface Property {
	user_email: string
	product: Product
}
