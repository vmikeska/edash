
export class DelayedReturn {

	public callback: Function;

	public delay = 1000;

	private timeoutId = null;

	public cancel() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
			this.timeoutId = null;
		}
	}

	public call() {
		this.cancel();

		this.timeoutId = setTimeout(() => {
			this.timeoutId = null;
			this.callback();
		},
		this.delay);
	}

}