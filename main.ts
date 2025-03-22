import moneroTs from "monero-ts";

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {

    // connect to a daemon
    console.log("Connecting to daemon");
    const daemonUri = "https://node.sethforprivacy.com:443";
    let daemon = await moneroTs.connectToDaemonRpc(daemonUri);
    const height = await daemon.getHeight();
    console.log("Daemon height: " + height);

    // connect to monero-wallet-rpc
    console.log("Connecting to wallet rpc");
    let walletRpc = await moneroTs.connectToWalletRpc("http://localhost:28084", "rpc_user", "abc123");
    console.log("Balance: " + (await walletRpc.getBalance()));
}
