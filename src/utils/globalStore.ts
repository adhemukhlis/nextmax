// globalStore.ts
type Primitive = string | number | boolean | null | undefined | symbol | bigint
type Storable = Primitive | object | Array<unknown>

class GlobalStore {
	private store = new Map<string, Storable>()

	set<T extends Storable>(key: string, value: T): void {
		this.store.set(key, value)
	}

	get<T = unknown>(key: string): T | undefined {
		return this.store.get(key) as T | undefined
	}

	has(key: string): boolean {
		return this.store.has(key)
	}

	delete(key: string): boolean {
		return this.store.delete(key)
	}

	clear(): void {
		this.store.clear()
	}
}

const globalStore = new GlobalStore()
export default globalStore
