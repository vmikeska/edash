
export class DelayedReturn {

			public delay = 1000;

			private timeoutId = null;
			private $input: any;

			public receive(callback) {

					if (this.timeoutId) {
							clearTimeout(this.timeoutId);
							this.timeoutId = null;
					}
					this.timeoutId = setTimeout(() => {
							this.timeoutId = null;
							callback();

					},
							this.delay);
			}
	}